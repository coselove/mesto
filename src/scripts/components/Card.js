export default class Card {
  constructor({ userID, data, handleCardClick, handleDeleteBtnClick }, cardSelector) {
    this._link = data.link;
    this._name = data.name;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteBtnClick = handleDeleteBtnClick;
    this._likes = data.likes;
    this._userID = data.userID;
    this._ownerID = data.owner._id;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".card__image").src = this._link;
    this._element.querySelector(".card__image").alt = this._name;
    this._element.querySelector(
      ".card__image-caption"
    ).textContent = this._name; /*
    this._element.querySelector(".card__like-counter").textContent = this._likes.length;
    this._element.querySelector(".card__like-counter")
    .classList.add("card__like-counter_active"); */
    this._setEventListeners();
    return this._element;
  }

  getID() {
    return this._userID;
  } 

  _checkOwner() {
    if (this._ownerID === this._userID) {
      return true
    } else {
      this._element.querySelector(".card__trash").classList.add(".card_trash-hiden")
    }
  
  }

  _like() {
    this._element
      .querySelector(".card__heart")
      .classList.toggle("card_heart-like");
      console.log("hi");
   /* this._element
      .querySelector(".card__like-counter")
      .classList.toggle("card__like-counter_active") */
      console.log("by!");
  }



 addLikes() {
 
    /*
    if (data.likes === true) {
      this._element
      .querySelector(".card__like-counter")
      .classList.add("card__like-counter_active");
      console.log(data);
    }
    else {
      this._element
      .querySelector(".card__like-counter")
      .classList.remove("card__like-counter_active");
    } */
  }

  _removeLike() {
  this._element
  .querySelector(".card__like-counter")
  .classList.remove("card__like-counter_active")
  console.log("goodby!");
  }

  _deleteCard() {
    this._element.parentElement.querySelector(".card__trash").closest(".card");
    this._element.remove(); 
  }

_count() {
 const currenCount = this._likes.length;
 console.log(this._likes.length);
    document.querySelector(".card__like-counter")
    .textContent = currenCount + 1;
    }

  _setEventListeners() {
    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleCardClick({ link: this._link, name: this._name });
      });

    this._element
      .querySelector(".card__heart")
      .addEventListener("click", () => {
        this._like();
        this._count();
      });

    this._element
      .querySelector(".card__trash")
      .addEventListener("click", () => {
        this._handleDeleteBtnClick();
      });
  }
}
