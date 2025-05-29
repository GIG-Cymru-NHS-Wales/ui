let cache = [
    "alice.adams@example.com",
    "bob.brown@example.com",
    "curt.charles@example.com"
];
function onKeyDown() {
    update("onKeyDown", event);
}
function onKeyUp() {
    update("onKeyUp", event);
}
function onPaste() {
    update("onPaste", event);
}
function update(message, /*KeyboardEvent:*/ event) {
    console.log(
        message,
        "update(event)",
        "currentTarget.id:", event.currentTarget.id,
        "currentTarget.value:", event.currentTarget.value,
        "KeyboardEvent",
        "key:", event.key,
        "code:", event.code,
        "shiftKey:", event.shiftKey,
        "ctrlKey:", event.ctrlKey,
        "altKey:", event.altKey,
        "metaKey:", event.metaKey,
        ""
    );
}
