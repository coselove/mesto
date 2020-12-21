import {FormValidator} from '../scripts/components/FormValidators.js';
import {params} from '../scripts/Config.js';
import Card from '../scripts/components/Card.js';
import {profileEdit, profilePopup, popupClose, formElement, formOverlay, 
  nameInput, jobInput, profileTitle, profileSubtitle, profileAdd, cardPopup,
  cardFormElement, cardFormOverlay, cardPopupClose, placeInput, citeInput, cardElementZoom, cardElementCaption, cardTemplate, imageFormOverlay,
  closeImgPopup, sectionElements} from '../scripts/utils/constants.js';
import Section from '../scripts/components/Section.js';
import {initialCards} from '../scripts/utils/initialСards.js'; 
import Popup from '../scripts/components/Popup.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import './index.css';

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
