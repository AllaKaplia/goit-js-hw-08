import throttle from 'lodash.throttle';


const EMAIL_MESSAGE_KEY = "feedback-form-state";
const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');


populateForm()

formEl.addEventListener('submit', evt => {
	evt.preventDefault();
    evt.currentTarget.reset();

	const state = JSON.parse(localStorage.getItem(EMAIL_MESSAGE_KEY));
	console.log(state);
    
	localStorage.removeItem(EMAIL_MESSAGE_KEY);
});

inputEl.addEventListener('input', throttle(onTextareaInputValue, 500));
textareaEl.addEventListener('input', throttle(onTextareaInputValue, 500));


function onTextareaInputValue() {
    const formData = {
        email: inputEl.value.trim(),
        message: textareaEl.value  
    }

    localStorage.setItem(EMAIL_MESSAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
    const saveMessage = localStorage.getItem(EMAIL_MESSAGE_KEY);

    if (saveMessage) {
        textareaEl.value = saveMessage;
    }
}