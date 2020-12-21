import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({popupSelector, submitFormHandler}) {
        super(popupSelector);
        this._submitFormHandler = submitFormHandler;
        this._formElement = this._popupSelector.querySelector('.popup__container');
    }

    _getInputValues() {
          this._inputList = Array.from(
          this._formElement.querySelectorAll('.popup__input-text'));
          this._inputValues = {};
          this._inputList.forEach((inputSelector) => {
            this._inputValues[inputSelector.name] = inputSelector.value;
        });
        return this._inputValues;
    }
    setEventListeners() {
        super.setEventListeners();
     
        this._formElement.addEventListener("submit", (evt) => {
          evt.preventDefault();
          this._submitFormHandler(this._getInputValues());
          super.closePopup();
        });
    }   
    
    closePopup() {
        super.closePopup();
        this._inputList = Array.from(
            this._formElement.querySelectorAll('.popup__input-text'));
          this._inputList.forEach((input) => {
            input.value = "";
        }); 
    } 
} 
