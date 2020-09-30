const showInputError = (formSelector, inputSelector, params, errorMessage) => {
  const errorElement = formSelector.querySelector(`#${inputSelector.id}-error`);
  inputSelector.classList.add(params.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(params.errorClass);
};

const hideInputError = (formSelector, inputSelector, params) => {
  const errorElement = formSelector.querySelector(`#${inputSelector.id}-error`);
  inputSelector.classList.remove(params.inputErrorClass);
  errorElement.classList.remove(params.errorClass);
  errorElement.textContent = "";
};

const isValid = (formSelector, inputSelector, params) => {
  if (!inputSelector.validity.valid) {
    showInputError(
      formSelector,
      inputSelector,
      params,
      inputSelector.validationMessage
    );
  } else {
    hideInputError(formSelector, inputSelector, params);
  }
};

const toggleButtonState = (inputList, buttonSave, params) => {
  if (hasInvalidInput(inputList)) {
    buttonSave.setAttribute("disabled", true);
    buttonSave.classList.add(params.inactiveButtonClass);
  } else {
    buttonSave.removeAttribute("disabled");
    buttonSave.classList.remove(params.inactiveButtonClass);
  }
};

const setEventListeners = (formSelector, params) => {
  const inputList = Array.from(
    formSelector.querySelectorAll(params.inputSelector)
  );
  const buttonSave = formSelector.querySelector(params.submitButtonSelector);
  toggleButtonState(inputList, buttonSave, params);
  inputList.forEach((inputSelector) => {
    inputSelector.addEventListener("input", () => {
      isValid(formSelector, inputSelector, params);
      toggleButtonState(inputList, buttonSave, params);
    });
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputPopup) => {
    return !inputPopup.validity.valid;
  });
};

const enableValidation = (params) => {
  const formList = Array.from(document.querySelectorAll(params.formSelector));
  formList.forEach((formSelector) => {
    formSelector.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formSelector, params);
  });
};

enableValidation({
  formSelector: ".popup__container",
  inputSelector: ".popup__input-text",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_inactive",
  inputErrorClass: "popup__input-text_type_error",
  errorClass: "popup__input-text-error_active",
});
