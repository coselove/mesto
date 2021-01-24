import Popup from "./Popup.js";

export default class PopupWithDelete extends Popup {
    constructor( popupSelector /*submitFormHandler */) {
        super(popupSelector);
        /*this._submitFormHandler = submitFormHandler;*/
        /*this._formElement = this._popupSelector.querySelector(".popup-delete");*/
    }
    openPopup() {
      super.openPopup();
    }

    console() {
      console.log('delete');
    }
   
/* 
    setEventListeners() {
        super.setEventListeners();
      }
  */  
}