const profileedit = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('.popup');
const popupclose = profilePopup.querySelector('.popup__close-button');
const formElement = profilePopup.querySelector('.popup__container');
const formOverlay = profilePopup.querySelector('.popup__overlay');
const nameInput = profilePopup.querySelector('.popup__input-text_name');
const jobInput = profilePopup.querySelector('.popup__input-text_occupation');
const profiletitle = document.querySelector('.profile__title');
const profilesubtitle = document.querySelector('.profile__subtitle');
const profileAdd = document.querySelector('.profile__add-button'); 
const cardPopup = document.querySelector('#card');
const cardFormElement = cardPopup.querySelector('.popup__container');
const cardFormOverlay = cardPopup.querySelector('.popup__overlay');
const cardPopupClose =  cardPopup.querySelector('.popup__close-button');
const placeInput = cardPopup.querySelector('.popup__input-text_place');
const citeInput = cardPopup.querySelector('.popup__input-text_cite');
const imagePopup = document.querySelector('#image');
const cardElementZoom = imagePopup.querySelector('.popup-image__image');
const cardElementCaption = imagePopup.querySelector('.popup-image__image-caption');
const cardTemplate = document.querySelector('#card-template').content;
const imageFormOverlay = imagePopup.querySelector('.popup__overlay');
const closeImgPopup = imagePopup.querySelector('.popup__close-button');


const sectionElements = document.querySelector('.elements');
const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
];

function openPopup(popup) {
  popup.classList.add('popup_opened'); 
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function openProfilePopup() {
 openPopup(profilePopup);

  nameInput.value = profiletitle.textContent
  jobInput.value = profilesubtitle.textContent
} 

function closeProfilePopup() {
  closePopup(profilePopup);
}

function submitFormHandler(evt) {
  evt.preventDefault();
  profiletitle.textContent = nameInput.value;
  profilesubtitle.textContent = jobInput.value;
  closePopup(profilePopup);
}

profileedit.addEventListener('click', openProfilePopup);

popupclose.addEventListener('click', closeProfilePopup);

function keyHandlerProfile(evt) {
  if (evt.key === 'Escape') {
  closeProfilePopup();
  }
  };

document.addEventListener('keydown', keyHandlerProfile); 

formOverlay.addEventListener('click', closeProfilePopup);

formElement.addEventListener('submit', submitFormHandler);


function openCardPopup() {
  openPopup(cardPopup);
} 

function closeCardPopup() {
  closePopup(cardPopup);
}

function imagePopupOpen() {
  
  openPopup(imagePopup);

  cardElementZoom.src = event.target.src;

  cardElementCaption.textContent = event.target.parentElement.querySelector('.card__image-caption').textContent;
} 

function closeImagePopup() {
  
  closePopup(imagePopup);
 }

function like(event) {
  event.target.classList.toggle('card_heart-like');
}

function deleteCard(event) {
  const deleteButton = event.target.parentElement.querySelector('.card__trash');
  const itemEl = deleteButton.closest('.card');
  itemEl.remove();
}

function submitFormHandlerP(evt) {

  evt.preventDefault();

  sectionElements.prepend(newCard({link: citeInput.value, name: placeInput.value}));

  closeCardPopup(); 
}

function keyHandlerCard(evt) {
  if (evt.key === 'Escape') {
    closeCardPopup();
  }
}

profileAdd.addEventListener('click', openCardPopup);

cardPopupClose.addEventListener('click', closeCardPopup);

cardFormOverlay.addEventListener('click', closeCardPopup);

document.addEventListener('keydown', keyHandlerCard);

cardFormElement.addEventListener('submit', submitFormHandlerP); 

function keyHandlerImage(evt) {
  if (evt.key === 'Escape') {
    closeImagePopup();
  }
}

const newCard = (card) => {

const cardElement = cardTemplate.cloneNode(true);

cardElement.querySelector('.card__image').src = card.link;
cardElement.querySelector('.card__image-caption').textContent = card.name;

const likeButton = cardElement.querySelector('.card__heart');

likeButton.addEventListener('click', like);

const deleteButton = cardElement.querySelector('.card__trash');

deleteButton.addEventListener('click', deleteCard);

const imageBtn = cardElement.querySelector('.card__image');

imageBtn.addEventListener('click', imagePopupOpen);

closeImgPopup.addEventListener('click', closeImagePopup);

imageFormOverlay.addEventListener('click', closeImagePopup);

document.addEventListener('keydown', keyHandlerImage);

return cardElement;

}


initialCards.forEach(card => {
  sectionElements.append(newCard(card));
});
