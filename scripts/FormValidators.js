export class FormValidator {
constructor(formSelector, params) {
  this._formSelector = formSelector;
  this._formElement = document.querySelector(formSelector);
  this._params = params;
  this._inputSelector = params.inputSelector;
  this._submitButtonSelector = params.submitButtonSelector;
  this._inactiveButtonClass = params.inactiveButtonClass;
  this._inputErrorClass = params.inputErrorClass;
  this._errorClass = params.errorClass;
}
_showInputError(inputSelector, errorMessage) {
  const errorElement = this._formElement.querySelector(`#${inputSelector.id}-error`);
  console.log(errorElement);
  inputSelector.classList.add(this._inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(this._errorClass);
};

_hideInputError(inputSelector) {
  const errorElement = this._formElement.querySelector(`#${inputSelector.id}-error`);
  inputSelector.classList.remove(this._inputErrorClass);
  errorElement.classList.remove(this._errorClass);
  errorElement.textContent = "";
};

_isValid(inputSelector) {
  if (!inputSelector.validity.valid) {
    this._showInputError(
      inputSelector,
      inputSelector.validationMessage
    );
  } else {
    this._hideInputError(inputSelector);
  }
};

_toggleButtonState(inputList, buttonSave) {
  if (this._hasInvalidInput(inputList)) {
    buttonSave.setAttribute("disabled", true);
    buttonSave.classList.add(this._inactiveButtonClass);
  } else {
    buttonSave.removeAttribute("disabled");
    buttonSave.classList.remove(this._inactiveButtonClass);
  }
};

_setEventListeners() {
  const inputList = Array.from(
    this._formElement.querySelectorAll(this._inputSelector)
  );
  const buttonSave = this._formElement.querySelector(this._submitButtonSelector);
  this._toggleButtonState(inputList, buttonSave);
  inputList.forEach((inputSelector) => {
    inputSelector.addEventListener("input", () => {
      this._isValid(inputSelector);
      this._toggleButtonState(inputList, buttonSave);
    });
  });
};

_hasInvalidInput(inputList) {
  return inputList.some((inputPopup) => {
    return !inputPopup.validity.valid;
  });
};

enableValidation() {
this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners(this._formElement);
};
}