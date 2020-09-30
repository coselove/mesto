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

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", keyHandler);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", keyHandler);
}

const keyHandler = (evt) => {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
};

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

function like(event) {
  event.target.classList.toggle("card_heart-like");
}

function deleteCard(event) {
  const deleteButton = event.target.parentElement.querySelector(".card__trash");
  const itemEl = deleteButton.closest(".card");
  itemEl.remove();
}

function submitFormHandlerP(evt) {
  evt.preventDefault();
  sectionElements.prepend(
    newCard({ link: citeInput.value, name: placeInput.value })
  );
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

const newCard = (card) => {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");

  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardElement.querySelector(".card__image-caption").textContent = card.name;

  const likeButton = cardElement.querySelector(".card__heart");

  likeButton.addEventListener("click", like);

  const deleteButton = cardElement.querySelector(".card__trash");

  deleteButton.addEventListener("click", deleteCard);

  const imageBtn = cardElement.querySelector(".card__image");

  imageBtn.addEventListener("click", function () {
    openPopup(imagePopup);
    cardElementZoom.src = event.target.src;
    cardElementZoom.alt = event.target.parentElement.querySelector(
      ".card__image-caption"
    ).textContent;
    cardElementCaption.textContent = event.target.parentElement.querySelector(
      ".card__image-caption"
    ).textContent;
  });

  return cardElement;
};

initialCards.forEach((card) => {
  sectionElements.append(newCard(card));
});
