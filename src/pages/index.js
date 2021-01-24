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
/*import { initialCards } from "../scripts/utils/initialСards.js";*/
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import UserInfo from "../scripts/components/UserInfo.js";
import "./index.css";
import PopupWithDelete from "../scripts/components/PopupWithDelete.js";
import Api from "../scripts/components/Api.js";


const formValidatorEdit = new FormValidator(params.formSelectorPoup, params);
formValidatorEdit.enableValidation();

const formValidatorAdd = new FormValidator(params.formSelectorCard, params);
formValidatorAdd.enableValidation();

const imagePopup = new PopupWithImage("#image");
imagePopup.setEventListeners();

const delPopup = new PopupWithDelete("#delete");
delPopup.setEventListeners();

const createNewCard = (data) => {
  const card = new Card(
    {
      data: data,
      handleCardClick: () => {
        imagePopup.openPopup(data);
      },
      handleDeleteBtnClick: () => {
        console.log('delete');
        delPopup.openPopup();
      }
    },
    "#card-template"
  );
  const cardElement = card.generateCard();
  return cardElement;
};
/*
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

cardList.renderItems(); */

const userInform = new UserInfo({
  userName: document.querySelector(".profile__title"),
  userJob: document.querySelector(".profile__subtitle"),
  avatar: document.querySelector(".profile__avatar"),
}); 
/*
const popupProfile = new PopupWithForm({
  popupSelector: "#profile",
  submitFormHandler: (item) => {
    userInform.setUserInfo({
      name: item["name"],
      about: item["occupation"],
    });
  },
});

popupProfile.setEventListeners(); */

profileEdit.addEventListener("click", () => {
  const currentUserInform = userInform.getUserInfo();
  nameInput.value = currentUserInform.name;
  jobInput.value = currentUserInform.about;
  popupProfile.openPopup();
}); 
/*
const popupCard = new PopupWithForm({
  popupSelector: "#card",
  submitFormHandler: (data) => {
    const cardNewElement = createNewCard({
      link: data["cite"],
      name: data["place"]
    });
    cardList.addItemPrepend(cardNewElement); 
  },
});

popupCard.setEventListeners();
*/
profileAdd.addEventListener("click", () => {
  popupCard.openPopup();
});

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-19',
});


const cardList = new Section(
  {
    /*items: initialCards,*/
    renderer: (data) => {
      const cardElement = createNewCard(data);
      cardList.addItem(cardElement);
    },
  },
  ".elements"
);

api.getInitialCards()
  .then(res => {
    cardList.renderItems(res);
  })
 
api.getUserInfo()
  .then(res => {
    userInform.setUserInfo(res)
  })

const popupProfile = new PopupWithForm({
  popupSelector: "#profile",
  submitFormHandler: (data) => {
    api.editProfile(data)
  .then(res=>{
    userInform.setUserInfo({
      name: res['name'],
      about: res['about'],
      avatar: res['avatar'],
      id: res['id'] 
    }); 
  })  
  },
}); 

popupProfile.setEventListeners(); 

const popupCard = new PopupWithForm({
  popupSelector: "#card",
  submitFormHandler: (data) => {
    api.addCard(data)
    .then(res=>{
      const cardNewElement = createNewCard({
        link: res["link"],
        name: res["name"],
    })
    cardList.addItemPrepend(cardNewElement)
    }); 
  },
});

popupCard.setEventListeners();


/*
const deletePopup = new PopupWithDelete("#delete");

deletePopup.setEventListeners(); */
/*
const cardTrashBtn = document.querySelector(".card__trash");

console.log(deletePopup); */
/*
cardTrashBtn.addEventListener("click", () => {
  console.log('delete');
  deletePopup.openPopup();
})
*/
/*
const imagePopup = new PopupWithImage("#image");
imagePopup.setEventListeners();


profileAdd.addEventListener("click", () => {
  popupCard.openPopup();
}); 
*/

