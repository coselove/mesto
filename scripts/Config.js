export const params = {
    formSelector: ".popup__container",
    formSelectorPoup: ".popup__container",
    formSelectorCard: ".popup-card__container",
    inputSelector: ".popup__input-text",
    submitButtonSelector: ".popup__save-button",
    inactiveButtonClass: "popup__save-button_inactive",
    inputErrorClass: "popup__input-text_type_error",
    errorClass: "popup__input-text-error_active",
  };

export  const imagePopup = document.querySelector("#image");

export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", keyHandler);
}

export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", keyHandler);
} 

export const keyHandler = (evt) => {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
}; 