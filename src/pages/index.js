import { FormValidator } from "../scripts/components/FormValidators.js";
import { params } from "../scripts/Config.js";
import Card from "../scripts/components/Card.js";
import {
  profileEdit,
  nameInput,
  jobInput,
  profileAdd,
} from "../scripts/utils/constants.js";
import Section from "../scripts/components/Section.js";
import { initialCards } from "../scripts/utils/initialСards.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import UserInfo from "../scripts/components/UserInfo.js";
import "./index.css";

const FormValidatorEdit = new FormValidator(params.formSelectorPoup, params);
FormValidatorEdit.enableValidation();

const FormValidatorAdd = new FormValidator(params.formSelectorCard, params);
FormValidatorAdd.enableValidation();

const imagePopup = new PopupWithImage("#image");
imagePopup.setEventListeners();

const createNewCard = (data) => {
  const card = new Card(
    {
      data: data,
      handleCardClick: () => {
        imagePopup.openPopup(data);
      },
    },
    "#card-template"
  );
  const cardElement = card.generateCard();
  return cardElement;
};

const cardList = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      const cardElement = createNewCard(data);
      cardList.addItem(cardElement);
    },
  },
  ".elements"
);

cardList.renderItems();

const userInform = new UserInfo({
  userName: document.querySelector(".profile__title"),
  userJob: document.querySelector(".profile__subtitle"),
});

const popupProfile = new PopupWithForm({
  popupSelector: "#profile",
  submitFormHandler: (item) => {
    userInform.setUserInfo({
      name: item["name"],
      info: item["occupation"],
    });
  },
});

popupProfile.setEventListeners();

profileEdit.addEventListener("click", () => {
  const currentUserInform = userInform.getUserInfo();
  nameInput.value = currentUserInform.name;
  jobInput.value = currentUserInform.info;
  popupProfile.openPopup();
});

const popupCard = new PopupWithForm({
  popupSelector: "#card",
  submitFormHandler: (data) => {
    const createNewCard = new Card(
      {
        data: {
          link: data["cite"],
          name: data["place"],
        },
        handleCardClick: (data) => {
          imagePopup.openPopup(data);
        },
      },
      "#card-template"
    );

    const cardNewElement = createNewCard.generateCard(data);
    cardList.addItemP(cardNewElement);
  },
});

popupCard.setEventListeners();

profileAdd.addEventListener("click", () => {
  popupCard.openPopup();
});
