import {FormValidator} from '../scripts/components/FormValidators.js';
/* import {initialCards} from './initialСards.js'; */
import {params, /*openPopup, closePopup */} from '../scripts/Config.js';
import Card from '../scripts/components/Card.js';
import {profileEdit, profilePopup, popupClose, formElement, formOverlay, 
  nameInput, jobInput, profileTitle, profileSubtitle, profileAdd, cardPopup,
  cardFormElement, cardFormOverlay, cardPopupClose, placeInput, citeInput, cardElementZoom, cardElementCaption, cardTemplate, imageFormOverlay,
  closeImgPopup, sectionElements} from '../scripts/utils/constants.js';
/* import {submitFormHandlerP, } from './utils/utils.js';  */
import Section from '../scripts/components/Section.js';
import {initialCards} from '../scripts/utils/initialСards.js'; 
/* import {submitFormHandlerP} from './utils/utils.js'; */
import Popup from '../scripts/components/Popup.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import './index.css';

/*
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
} */
/*
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
*/ /*
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
}); */
/*
initialCards.forEach((item) => {
  const card = new Card(item, "#card-template");
  const cardElement = card.generateCard();
  sectionElements.append(cardElement);
})
*/

const FormValidatorEdit = new FormValidator(params.formSelectorPoup, params);
FormValidatorEdit.enableValidation();

const FormValidatorAdd = new FormValidator(params.formSelectorCard, params);
FormValidatorAdd.enableValidation();

const imagePopup = new PopupWithImage("#image");
imagePopup.setEventListeners();

const newCard = (data) => {
  const card = new Card({
    data: data,
    handleCardClick: () => {
     imagePopup.openPopup(data);
  }}, "#card-template");
  const cardElement = card.generateCard();
  return cardElement;
}

const cardList = new Section({
  items: initialCards,
  renderer: (data) => {
    const cardElement = newCard(data);
    cardList.addItem(cardElement);
  },
}, ".elements");

cardList.renderItems();

/*
const popupProfile = new Popup(".popup");
popupProfile.setEventListeners(); 

const popupCard = new Popup("#card");
popupCard.setEventListeners();

const popupImage = new PopupWithImage("#image");
popupImage.setEventListeners(); */

const userInform = new UserInfo({
  userName: document.querySelector(".profile__title"),
  userJob: document.querySelector(".profile__subtitle")
});

const popupProfile = new PopupWithForm({
  popupSelector: "#profile", 
  submitFormHandler: () => {
   userInform.setUserInfo({
     name: nameInput.value, 
     info: jobInput.value
   });
  }
});

popupProfile.setEventListeners();


profileEdit.addEventListener('click', () => {
  popupProfile.openPopup();
});

const popupCard = new PopupWithForm({
  popupSelector: "#card",
  submitFormHandler: (data) => {
    const newCard = new Card({
      data: {
        link: citeInput.value, 
        name: placeInput.value},
      handleCardClick: (data) => {
        imagePopup.openPopup(data);
     }
    }, "#card-template");
    const cardNewElement = newCard.generateCard(data);
    sectionElements.prepend(cardNewElement);
  }
}); 

popupCard.setEventListeners();

profileAdd.addEventListener('click', () => {
  popupCard.openPopup();
})

console.log('Hello, World!');

const numbers = [2, 3, 5];

// Стрелочная функция. Не запнётся ли на ней Internet Explorer?
const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers); // 4, 6, 10 