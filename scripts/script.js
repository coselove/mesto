const profileedit = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('.popup');
const popupclose = document.querySelector('.popup__close-button');
const formElement = document.querySelector('.popup__container');
const nameInput = document.querySelector('.popup__input-text_name');
const jobInput = document.querySelector('.popup__input-text_occupation');
const profiletitle = document.querySelector('.profile__title');
const profilesubtitle = document.querySelector('.profile__subtitle');
const profileAdd = document.querySelector('.profile__add-button'); 
const cardPopup = document.querySelector('.popup-card');
const cardPopupClose = document.querySelector('.popup-card__close-button');
const placeInput = document.querySelector('.popup-card__input-text_place');
const citeInput = document.querySelector('.popup-card__input-text_cite');
const imagePopup = document.querySelector('.popup-image');
const cardElementZoom = document.querySelector('.popup-image__image');
const cardElementCaption = document.querySelector('.popup-image__image-caption');
const cardTemplate = document.querySelector('#card-template').content;
const closeImgPopup = document.querySelector('.popup-image__close-button');
const cardFormElement = document.querySelector('.popup-card__container');

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
  
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.card__image').src = citeInput.value;
  cardElement.querySelector('.card__image-caption').textContent = placeInput.value;
 
  const likeButton = cardElement.querySelector('.card__heart');
  
  likeButton.addEventListener('click', like);

  const deleteButton = cardElement.querySelector('.card__trash');

  deleteButton.addEventListener('click', deleteCard);

  const imageBtn = cardElement.querySelector('.card__image');

  imageBtn.addEventListener('click', imagePopupOpen);

  closeImgPopup.addEventListener('click', closeImagePopup); 

  sectionElements.prepend(cardElement);
 
  closeCardPopup(); 
}

const newCard = card => {

const cardElement = cardTemplate.cloneNode(true);

cardElement.querySelector('.card__image').src = card.link;
cardElement.querySelector('.card__image-caption').textContent = card.name;

profileAdd.addEventListener('click', openCardPopup);

cardPopupClose.addEventListener('click', closeCardPopup);

cardFormElement.addEventListener('submit', submitFormHandlerP);

const likeButton = cardElement.querySelector('.card__heart');

likeButton.addEventListener('click', like);

const deleteButton = cardElement.querySelector('.card__trash');

deleteButton.addEventListener('click', deleteCard);

const imageBtn = cardElement.querySelector('.card__image');

imageBtn.addEventListener('click', imagePopupOpen);

closeImgPopup.addEventListener('click', closeImagePopup);

sectionElements.append(cardElement);
}

initialCards.forEach(newCard); 





