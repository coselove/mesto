import { formElement } from "../utils/constants.js";
import Popup from "./Popup.js";

export default class PopupWithDelete extends Popup {
    constructor( popupSelector, {submitFormHandler} ) {
        super(popupSelector);
        this._submitFormHandler = submitFormHandler;
        this._popupWithDeleteBtn = this._popupSelector.querySelector(".popup__save-button"); 
    }


    openPopup(cardId, data) {
      this._popupWithDeleteBtn.addEventListener('click', (evt) => {
        evt.preventDefault();
        this._submitFormHandler(cardId, data); 
        super.closePopup(); 
  
      })
      super.openPopup();
    } 
}