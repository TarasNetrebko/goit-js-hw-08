import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const emailInput = document.querySelector("input[name='email']");
const messageInput = document.querySelector("textarea[name='message']");



form.addEventListener("input", throttle(storagePutHandler, 500));
form.addEventListener("submit", onSubmitHandler);



function storagePutHandler() {
    const formData = {
        email: emailInput.value,
        message: messageInput.value,
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}
document.addEventListener("DOMContentLoaded", storageGetHandler);

function storageGetHandler() {
    try {
        const formData = JSON.parse(localStorage.getItem("feedback-form-state"));
        if (formData) {        
        emailInput.value = formData.email;
        messageInput.value = formData.message;
        }
    } catch(error) {
        console.log("error:", error);
    }
}
function onSubmitHandler(e) {
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    localStorage.removeItem("feedback-form-state");
    form.reset();
}
