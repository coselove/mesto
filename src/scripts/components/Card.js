export default class Card {
  constructor({ data, userId, handleCardClick, handleDeleteBtnClick, api }, cardSelector) {
    this._link = data.link;
    this._name = data.name;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteBtnClick = handleDeleteBtnClick;
    this._cardId = data._id;
    this._api = api;
    this._userId = userId;
    this._owner = data.owner._id;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  _checkCardId() {
    return this._owner === this._userId;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector(".card__image").src = this._link;
    this._element.querySelector(".card__image").alt = this._name;
    this._element.querySelector(".card__image-caption").textContent = this._name; 
    this._element.querySelector(".card__like-counter").textContent = this._cardId.length;
    this._element.querySelector(".card__like-counter").classList.add("card__like-counter_active");  
    if (!this._checkCardId()) {
      this._element.querySelector(".card__trash").classList.add("card_trash-hidden"); 
    }  
    return this._element;
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
  /* this._element
    .parentElement
    .querySelector(".card__trash").closest(".card"); */
    this._element.remove(); 
    this._element = null;
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

      this._element.querySelector(".card__trash")
      .addEventListener("click", (evt) => {
       this._cardElement = evt.target.parentElement
       .querySelector(".card__trash").closest(".card"); 
        this._handleDeleteBtnClick(
          this._cardId, 
          this._cardElement, 
          this._api);
       /* console.log(this._cardId);
        console.log(this._cardElement);
        console.log(this._api); */
      }); 
  }
}
