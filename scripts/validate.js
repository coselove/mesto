const showInputError = (formPopup, inputPopup, errorMessage) => {
  const errorElement = formPopup.querySelector(`#${inputPopup.id}-error`);
  inputPopup.classList.add('popup__input-text_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-text-error_active');
};

const hideInputError = (formPopup, inputPopup) => {
  const errorElement = formPopup.querySelector(`#${inputPopup.id}-error`);
  inputPopup.classList.remove('popup__input-text_type_error');
  errorElement.classList.remove('popup__input-text-error_active'); 
  errorElement.textContent = '';
};

const isValid = (formPopup, inputPopup) => {
    if (!inputPopup.validity.valid) {
        showInputError(formPopup, inputPopup, inputPopup.validationMessage);
    } else {
        hideInputError(formPopup, inputPopup);
    }
};

const setEventListeners = (formPopup) => {
  const inputList = Array.from(formPopup.querySelectorAll('.popup__input-text'));
  const buttonSave = formPopup.querySelector('.popup__save-button');
 
  inputList.forEach((inputPopup) => {
    inputPopup.addEventListener('input', () => {
     isValid(formPopup, inputPopup);
     toggleButtonState(inputList, buttonSave);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__container'));
  formList.forEach((formPopup) => {
  formPopup.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });
  setEventListeners(formPopup);    
  });
};

enableValidation();

setEventListeners(formElement);

const hasInvalidInput = (inputList) => {
  return inputList.some((inputPopup) => {
    return !inputPopup.validity.valid;
  });
}

const toggleButtonState = (inputList, buttonSave) => {
  if (hasInvalidInput(inputList)) {
  buttonSave.setAttribute('disabled', true);  
  buttonSave.classList.add('popup__save-button_inactive');
  } else {
  buttonSave.removeAttribute('disabled');  
  buttonSave.classList.remove('popup__save-button_inactive');
  }
} 

