import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }
        openPopup(data) {
          super.openPopup();
          this._popupSelector.querySelector(".popup-image__image").src = data.link;
          this._popupSelector.querySelector(".popup-image__image").alt = data.name;
          this._popupSelector.querySelector(".popup-image__image-caption").textContent = data.name;
         
        }
    }

