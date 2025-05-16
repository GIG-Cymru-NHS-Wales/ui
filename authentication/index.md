# Authentication user experience

## Situation - Context and Problem Statement

We are developing a hospital applications, and we are learning that some kinds
of authentication are not viable e.g. sending the doctor an SMS text, or using a
TOPT authenticator app on a nurse's mobile phone.

This is a work in progress (WIP) and a request for comments (RFC).

We welcome constructive advice, constructive criticism, pointers to resources,
and help.

Contact Joel Henderson <joel.henderson@wales.nhs.uk>

## Drivers

High-level purpose:

* We need multi-factor authentication because the data includes high-security
  healthcare records.

* We want speed because some emergency department patients have life-threatening
  critical issues.

* We want convenience because the clinical staff has so much things happening at
  once.

Specific purpose:

* We currently believe the fastest/simplest/best path to the emergency
  department module (EDM) proof of capability (PoC) for multi-party
  authentication (MPA) is to skip building it into the app, and instead making
  an API call to external terminology services, such as a SNOMED service, or
  MPA-compliance service, etc.

* We want to align with industry standards (not reinvent the wheel).

* We want to get good-enough quality work in place now, so we can try it out,
ask for feedback, and get help.

### Introductory reading

* [NHS England Digital: Guide to multi-factor authentication (MFA) policy](https://digital.nhs.uk/cyber-and-data-security/guidance-and-assurance/multi-factor-authentication-mfa-policy/guide-to-multi-factor-authentication-policy): This introduces the cyber security strategy for health and social care, the Cyber Assessment Framework (CAF), policy objectives and requirements, NHS smartcards, FIDO tokens, TOPT, federating with the NHS Care Identity Service 2, and more.

* [GOV.UK: Using authenticators to protect an online service](https://www.gov.uk/government/publications/authentication-credentials-for-online-government-services): Good Practice Guide (GPG) 44 helps you choose the authenticator that will give you the right level of protection for your service.

* [What is the right authentication method for my medical device?](https://www.periculo.co.uk/cyber-security-blog/what-is-the-right-authentication-method-for-my-medical-device)

### Challenges

The hospital emergency department setting has challenges that are different than
in most settings.

For example, we're discovering challenges related to mobile phone text/app
authentication, mobile phone camera authentication, and touchscreen interfaces.

## Two-person rule & two-person integrity

The two-person rule is a control mechanism designed to achieve a high level of
security for especially critical material or operations. Under this rule, access
and actions require the presence of two or more authorized people.

Two-person integrity (TPI) is the name for the security measures taken to
prevent single-person access.

In the context of healthcare, the two-person rule and two-person integrity can
be useful in a variety of ways.

* Example When a clinician is treating a minor, then the clinician must have a
  second-in-command clinician present and also concurring with the treatment.

* Example: When a clinician prescribes a highly-controlled substance, such as a
  medication that is risky or is known to be likely to be abused, then
  prescription requires a second clinician to sign it.

Specifically right now, the emergency department module authentication needs
some kind of plan for authentication using "multi-party authentication" (MPA)
which is historically known as the "two-person rule" (2PR). Our current
understanding is that there's a medical must-have requirement to have two
clinicians do simultaneous authentication in real-time during high-risk
treatments, procedures, prescriptions, etc.

### Use autocomplete with email address

Some of the user needs require many authentications, such as 30+ times daily.
Thus we're considering possible ways to make it easier for the user to sign in.

There are a variety of ways to do autocomplete with the user's email address.

* Store a local cache of recently-used email addresses. This may be viable for a
  device that is only used by a list of pre-approved professionals, such as for
  the emergency depertment staff using an emergency department kiosk. For
  example, a person types the first letter "a" then sees the most-recent email
  addresses that starts with "a" such as <alice@example.com>,
  <angela@example.com>, etc.

* Provide autocomplete just for expected hostnames because these are
  organization-identifying, not usernames because these are
  personally-identifying. For example, a user types "alice@" then sees the list
  of suggested hostnames such as <alice@example.com>, <alice@gmail.com>, etc.

### Mobile phone text/app authentication

We cannot rely on every person having sufficient access to their personal phones.

* Some hospital administrators disallow personal phones for professional use.

* Some people have phones that are somewhat broken, such as with broken glass,
  which could introduce a safety risk in an emergengy department setting.

* Some hospital staff store their personal phones in their work lockers, because
  they prefer to separate their personal life and professional life.

* Some triage staff do not want to expose their personal phones to any extra
  infection vectors, such as microbes in the emergency department.

* Some staff are reasonably concerned about accidentally damaging their phone,
  such as dropping it.

* Some healthcare professionals assert increased risk of microbial infection
  when consumer-grade phones are used in hospital-grade settings, because the
  phones cannot be easily wiped or disinfected.

* Some EHR representatives assert increased risk of accidents with personal
  mobile phones.

* Some providers do not want to carry their phones with them, because they are
  moving frequently among hospital areas that are dangerous for mobile phones,
  such as near MRI machines.

* Some hospitals have mobile coverage issues, because of subpar coverage by the
  local cellular company, or subpar coverage by the local wifi network, or
  signal interference by building structures or medical equipment.

* Some staff describe battery issues, such as their battery not lasting a full
  workday during normal use.

* Some of the needs require many authentications, such as a clinician who needs
  to approve a specialized treatment, such as the treatment of a minor, or
  treatment using a restricted medication, etc. A clinician may need to do this
  20x daily.

### Mobile phone camera authentication

We cannot rely on all users having mobile phone camera authentication.

* Probably we can try this, if the camera is for purpose. 
  
* Probably we can't try this, if the camera is for generic use such as on a
  mobile phone.

* Example: A provider tries to use their personal mobile phone that has their
  installed EHR mobile app, which has a secure camera function. Unfortunately,
  the doctor accidentally uses the built-in camera app. This accidentally causes
  a PII leak (because the patient photo is now on the provider's personal photo
  stream) and additionally causes a loss of information (because the patient
  photo is not saved into the EHR).

* Example: A provider sees something about the patient and wants a second
  opinion from a peer or supervisor. The provider asks the patient ahead of time
  if it's OK to take a photo using the doctor's own personal phone camera, and
  explains to the patient that the purpose is to work around an EHR limitation
  in photo sharing. A typical example is a doctor who wants to get a second
  opinion from a colleage at a different health organization that uses a
  non-compatible EHR. This is all done fully transparently, and fully in the
  interests of helping the patient. However, the image never goes into either
  provider's EHR. Worse, some providers send the images via insecure messaging
  systems, or corporate social networks such as Facebook and WhatsApp.

* Example: A provider surreptitiously takes a photo for selfish reasons, such as
  photograhping a celebrity without their consent.

### Fingerprint authentication

We don't see any viable path forward for requiring fingerprints.

* Example: a provider wears nitrile gloves, which obscure fingerprints.

* Example: a provider gets their fingers wet, such as with body fluids, or with wash disinfectants.

### Touchscreen user interface

This may be an option, at least for some locations and some users. 

* Probably yes if we try to use a medical-grade disinfectable large touchscreen.

* Probably no if we try to use a personal phone.

* Example: A provider tries to use a touchscreen while wearing personal
  protective gear, such as latex gloves or nitrile gloves. Unfortunately, the
  gloves interfere with the touch screen. Additionally, the gloves may leave
  behind dust on the screen, which then interferes even more.

* Example: for shared touchscreens, such as those used in emergency departments,
  many providers touch the screen throughout the day. This can cause increased
  risk of cross-contamination, infection, microbial spread, and grime. In some
  medical settings, there are standard operating proceedures for wiping screens
  and disinfecting screens, such as every hour, or between uses by each staff
  person, or between each patient interaction.

## Assessment - Considered Options

We aim to create good-enough security, good-enough speed, and good-enough
convenience.

We are currently investigating many options.

### Touchless chips

There are options for touchless chipces, such as by using a touchless smartcard
(or wristband, or ring, etc.) that use radio-frequency identification (RFID)
and/or near field communication (NFC).

These can be used with many kinds of implementations, such as an RFID chip on a
physcial ID card, or an NFC interaction by using a phone or smartwatch, etc.

### FIDO2, WebAuthn CTAP2

Newer protocols such as FIDO2 with WebAuthn and CTAP2 offer possibilities to go
passwordless. A FIDO2 security key looks like a promising path.

### Professional mobile phones

Could the hospital provide each staff member with a professional mobile phone?
This could be a highly-durable phone, with a drop-proof water-proof case, and
with hospital-specific multi-device management software.

There are expenses for this.

This option does not seem to address the problems with areas near MRI machines,
nor sub-par coverage.

### Touchscreen kiosks/devices

Could the hospital provide a medical-grade large touchscreen, such as 15-inch or
larger, such as on a medical cart?

There are commercial options for self-contained computers with medical-grade
large touchscreens, that have multiple large-capacity battery packs that can be
swapped in and out as needed, for 24-hour power without needing any wall outlet.

There are commercial options for rapid disinfectable screens, including with
dedicated physical buttons to lock the screen, so wiping the screen doesn't
accidentally cause any interface touch events.

### Microsoft Windows Hello

Microsoft Windows Hello is "a more personal way to sign in, using your face,
fingerprint or a PIN. You can use Windows Hello to sign in to your device from
the lock screen and sign in to your account on the web."

There are some issues with face recognition if the provider is wearing a face
mask. These issues may be simple or complex to overcome, depending on whether
the software is able to do a sufficiently-expert recognition of the person's eye
area and 3D facial structure.

There may be some issues with how many different people can use one Microsoft
Windows Hello sign in, on some devices. One of our security consulting partners
has said that they hit limits at 10 users of the same machine.

We believe there are similar kinds of camera-based authentication systems for
other operating systems and devices. A common request is to ensure that whatever
system we develop is also conceptually viable to work on a typical iPad and a
typical Android tablet.

### Biometric sign in beyond face and fingerprints

There are potential options for biometric sign in beyond face and fingerprints:
voice recognition, hand recognition, retina recognition. We may research these.
