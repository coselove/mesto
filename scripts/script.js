const profileedit = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupclose = document.querySelector('.popup__close-button');
const formElement = document.querySelector('.popup__container');
const nameInput = document.querySelector('.popup__input-text_name');
const jobInput = document.querySelector('.popup__input-text_occupation');
const profiletitle = document.querySelector('.profile__title');
const profilesubtitle = document.querySelector('.profile__subtitle');
const profileAdd = document.querySelector('.profile__add-button'); 
const popupCard = document.querySelector('.popup-card');
const popupCardClose = document.querySelector('.popup-card__close-button');
const placeInput = document.querySelector('.popup-card__input-text_place');
const citeInput = document.querySelector('.popup-card__input-text_cite');
const popupImage = document.querySelector('.popup-image');



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

function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profiletitle.textContent
  jobInput.value = profilesubtitle.textContent
} 

function closePopup() {
  popup.classList.remove('popup_opened');
}

function SubmitFormHandler(evt) {
  evt.preventDefault();
  profiletitle.textContent = nameInput.value;
  profilesubtitle.textContent = jobInput.value;
  closePopup();
}

profileedit.addEventListener('click', openPopup);

popupclose.addEventListener('click', closePopup);

formElement.addEventListener('submit', SubmitFormHandler);


function openPopupCard() {
  popupCard.classList.add('popup-card_opened');
} 

function closePopupCard() {
  popupCard.classList.remove('popup-card_opened');
}

function openPopupImage() {
  
  popupImage.classList.add('popup-image_opened');  
  
  const cardElementZoom = document.querySelector('.popup-image__image');

  const cardElementCaption = document.querySelector('.popup-image__image-caption');

  cardElementZoom.src = event.target.src;

  cardElementCaption.textContent = event.target.parentElement.querySelector('.card__image-caption').textContent;
  
} 

function closePopupImage() {
  popupImage.classList.remove('popup-image_opened');
 }

function like(event) {
  event.target.classList.toggle('card_heart-like');
}

function deleteCard(event) {
  const deleteButton = event.target.parentElement.querySelector('.card__trash');
  const Item = deleteButton.closest('.card');
  Item.remove();
}

function SubmitFormHandlerP(evt) {

  evt.preventDefault();
  
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.cloneNode(true);
 
  cardElement.querySelector('.card__image-caption').textContent = placeInput.value,
  cardElement.querySelector('.card__image').src = citeInput.value

  const likeButton = cardElement.querySelector('.card__heart');
  
  likeButton.addEventListener('click', like);

  const deleteButton = cardElement.querySelector('.card__trash');

  deleteButton.addEventListener('click', deleteCard);

  const imageBtn = cardElement.querySelector('.card__image');

  imageBtn.addEventListener('click', openPopupImage);

  const closeImagePopup = document.querySelector('.popup-image__close-button');

  closeImagePopup.addEventListener('click', closePopupImage);

  sectionElements.prepend(cardElement);
 
  closePopupCard();
}

const NewCard = card => {
const cardTemplate = document.querySelector('#card-template').content;
const cardElement = cardTemplate.cloneNode(true);

cardElement.querySelector('.card__image').src = card.link;
cardElement.querySelector('.card__image-caption').textContent = card.name;

profileAdd.addEventListener('click', openPopupCard);

popupCardClose.addEventListener('click', closePopupCard);

const cardFormElement = document.querySelector('.popup-card__container');

cardFormElement.addEventListener('submit', SubmitFormHandlerP);

const likeButton = cardElement.querySelector('.card__heart');

likeButton.addEventListener('click', like);

const deleteButton = cardElement.querySelector('.card__trash');

deleteButton.addEventListener('click', deleteCard);

const imageBtn = cardElement.querySelector('.card__image');

imageBtn.addEventListener('click', openPopupImage);

const closeImagePopup = document.querySelector('.popup-image__close-button');

closeImagePopup.addEventListener('click', closePopupImage);

sectionElements.append(cardElement);
}

initialCards.forEach(NewCard);



