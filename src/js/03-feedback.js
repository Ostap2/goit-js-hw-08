import throttle from 'lodash.throttle';

const form = document.getElementById('feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

form.addEventListener('input', throttle(saveFormState, 500));

function saveFormState() {
  const formState = {
    email: emailInput.value,
    message: messageInput.value
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}

window.addEventListener('load', () => {
    const savedFormState = localStorage.getItem('feedback-form-state');
    if (savedFormState) {
      const formState = JSON.parse(savedFormState);
      emailInput.value = formState.email;
      messageInput.value = formState.message;
    }
  });

  form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formState = {
    email: emailInput.value,
    message: messageInput.value
  };


  emailInput.value = '';
  messageInput.value = '';


  console.log(formState);


  localStorage.removeItem('feedback-form-state');
}

