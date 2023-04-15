import throttle from 'lodash.throttle';

const EMAIL_MESSAGE_KEY = "feedback-form-state";

const formEl = document.querySelector('.feedback-form');
const { email, message } = formEl.elements;

let formData = {};

populateForm()

formEl.addEventListener('submit', evt => {
	evt.preventDefault();
    formData = { email: email.value, message: message.value };

    console.log(formData);

	localStorage.removeItem(EMAIL_MESSAGE_KEY);
    evt.currentTarget.reset();
    formData = {};
});

formEl.addEventListener('input', throttle(() => {
    formData = { email: email.value, message: message.value };
    localStorage.setItem(EMAIL_MESSAGE_KEY, JSON.stringify(formData));

}, 500))

function populateForm() {
    if (localStorage.getItem(EMAIL_MESSAGE_KEY)) {
        const storedData = JSON.parse(localStorage.getItem(EMAIL_MESSAGE_KEY)); 
        email.value = storedData.email || '';
        message.value = storedData.message || '';
    }
}