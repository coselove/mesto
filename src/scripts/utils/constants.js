const profileEdit = document.querySelector(".profile__edit-button");
const profilePopup = document.querySelector(".popup");
const popupClose = profilePopup.querySelector(".popup__close-button");
const formElement = profilePopup.querySelector(".popup__container");
const formOverlay = profilePopup.querySelector(".popup__overlay");
const nameInput = profilePopup.querySelector(".popup__input-text_name");
const jobInput = profilePopup.querySelector(".popup__input-text_occupation");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const profileAdd = document.querySelector(".profile__add-button");
const cardPopup = document.querySelector("#card");
const cardFormElement = cardPopup.querySelector(".popup__container");
const cardFormOverlay = cardPopup.querySelector(".popup__overlay");
const cardPopupClose = cardPopup.querySelector(".popup__close-button");
const placeInput = cardPopup.querySelector(".popup__input-text_place");
const citeInput = cardPopup.querySelector(".popup__input-text_cite");
const imagePopup = document.querySelector("#image");
const cardElementZoom = imagePopup.querySelector(".popup-image__image");
const cardElementCaption = imagePopup.querySelector(
  ".popup-image__image-caption"
);
const cardTemplate = document.querySelector("#card-template").content;
const imageFormOverlay = imagePopup.querySelector(".popup__overlay");
const closeImgPopup = imagePopup.querySelector(".popup__close-button");
const sectionElements = document.querySelector(".elements");
export {
  profileEdit,
  profilePopup,
  popupClose,
  formElement,
  formOverlay,
  nameInput,
  jobInput,
  profileTitle,
  profileSubtitle,
  profileAdd,
  cardPopup,
  cardFormElement,
  cardFormOverlay,
  cardPopupClose,
  placeInput,
  citeInput,
  imagePopup,
  cardElementZoom,
  cardElementCaption,
  cardTemplate,
  imageFormOverlay,
  closeImgPopup,
  sectionElements,
};
