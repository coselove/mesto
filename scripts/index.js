import {FormValidator} from './FormValidators.js';
import {initialCards} from './initialСards.js';
import {params, imagePopup, openPopup, closePopup} from './Config.js';
import {Card} from './Card.js';

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
const cardElementZoom = imagePopup.querySelector(".popup-image__image");
const cardElementCaption = imagePopup.querySelector(
  ".popup-image__image-caption"
);
const cardTemplate = document.querySelector("#card-template").content;
const imageFormOverlay = imagePopup.querySelector(".popup__overlay");
const closeImgPopup = imagePopup.querySelector(".popup__close-button");
const sectionElements = document.querySelector(".elements");

function submitFormHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(profilePopup);
}

profileEdit.addEventListener("click", function () {
  openPopup(profilePopup);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
});

popupClose.addEventListener("click", function () {
  closePopup(profilePopup);
});

formOverlay.addEventListener("click", function () {
  closePopup(profilePopup);
});

formElement.addEventListener("submit", submitFormHandler);

function submitFormHandlerP(evt) {
  evt.preventDefault();
  const newCard = new Card({link: citeInput.value, name: placeInput.value}, "#card-template");
  const cardNewElement = newCard.generateCard();
  sectionElements.prepend(cardNewElement);

  closePopup(cardPopup);
}

profileAdd.addEventListener("click", function () {
  openPopup(cardPopup);
});

cardPopupClose.addEventListener("click", function () {
  closePopup(cardPopup);
});

cardFormOverlay.addEventListener("click", function () {
  closePopup(cardPopup);
});

cardFormElement.addEventListener("submit", submitFormHandlerP);

closeImgPopup.addEventListener("click", function () {
  closePopup(imagePopup);
});

imageFormOverlay.addEventListener("click", function () {
  closePopup(imagePopup);
});

initialCards.forEach((item) => {
  const card = new Card(item, "#card-template");
  const cardElement = card.generateCard();
  sectionElements.append(cardElement);
})

const FormValidatorEdit = new FormValidator(params.formSelectorPoup, params);
FormValidatorEdit.enableValidation();

const FormValidatorAdd = new FormValidator(params.formSelectorCard, params);
FormValidatorAdd.enableValidation();

