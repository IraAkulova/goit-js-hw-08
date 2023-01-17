import throttle from "lodash.throttle";

const refs = {
    formEl: document.querySelector('.feedback-form'),
    emailEl: document.querySelector('input'),
    messageEl: document.querySelector('textarea'),
};
const formData = {};
const STORAGE_KEY = "feedback-form-state";

refs.formEl.addEventListener("submit", onFormSubmit);
refs.formEl.addEventListener("input", throttle((onFormInput), 1000));
function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
};
function onFormInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};
function populateForm() {
    const savedMsg = localStorage.getItem(STORAGE_KEY);
    const parcedMsg = JSON.parse(savedMsg);

    if (savedMsg) {
        refs.emailEl.value = parcedMsg.email;
        refs.messageEl.value = parcedMsg.message;
    }
    
};
populateForm();