export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  openPopup() {
    this._popupSelector.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  closePopup() {
    this._popupSelector.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.closePopup(document.querySelector(".popup_opened"));
    }
  }

  setEventListeners() {
    const popupCloseBtn = this._popupSelector.querySelector(
      ".popup__close-button"
    );
    popupCloseBtn.addEventListener("click", () => {
      this.closePopup();
    });
    const popupOverlay = this._popupSelector.querySelector(".popup__overlay");
    popupOverlay.addEventListener("click", () => {
      this.closePopup();
    });

  }
}
