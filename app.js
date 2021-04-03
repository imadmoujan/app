let content = document.getElementById("content");
let result = document.getElementById("result");
let select = document.getElementById("select");

content.addEventListener("input", () => {
    coder();
});
select.addEventListener("change", () => {
    coder();
});

function coder() {
    if (select.value == "encode") {
        result.value = window.btoa(content.value);
    } else if (select.value == "decode") {
        result.value = window.atob(content.value);
    }
}