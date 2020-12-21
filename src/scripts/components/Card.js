export default class Card {
    constructor({data, handleCardClick}, cardSelector) {
      this._link = data.link;
      this._name = data.name;
      this._cardSelector = cardSelector;
      this._handleCardClick = handleCardClick; 
    }

    _getTemplate() {
      const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector(".card")
      .cloneNode(true);
  
      return cardElement;
    }
  
    generateCard() {
      this._element = this._getTemplate();
      this._element.querySelector(".card__image").src = this._link;
      this._element.querySelector(".card__image").alt = this._name;
      this._element.querySelector(".card__image-caption").textContent = this._name;
      this._setEventListeners();
      return this._element;
    }
    
    
    _like() {
      this._element.querySelector(".card__heart").classList.toggle("card_heart-like");
    }
  
    _deleteCard() {
      this._element.parentElement.querySelector(".card__trash").closest(".card");
      this._element.remove();
    }

    _setEventListeners() {

      this._element.querySelector(".card__image").addEventListener("click", () => {
        this._handleCardClick({link: this._link, name: this._name}); 
        });  

      this._element.querySelector(".card__heart").addEventListener("click", () => {
        this._like();
      });
  
      this._element.querySelector(".card__trash").addEventListener("click", () => {
        this._deleteCard();
      });
  }
}
  