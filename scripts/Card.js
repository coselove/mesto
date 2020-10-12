import {imagePopup, openPopup} from './Config.js';

export class Card {
    constructor(data, cardSelector) {
      this._link = data.link;
      this._name = data.name;
      this._cardSelector = cardSelector;
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
      this._setEventListeners();
      this._element.querySelector(".card__image").src = this._link;
      this._element.querySelector(".card__image").alt = this._name;
      this._element.querySelector(".card__image-caption").textContent = this._name;
  
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
      this._element.querySelector(".card__heart").addEventListener("click", () => {
        this._like();
      });
  
      this._element.querySelector(".card__trash").addEventListener("click", () => {
        this._deleteCard(); 
      });
      
      this._element.querySelector(".card__image").addEventListener("click", () => {
        openPopup(imagePopup);
        document.querySelector(".popup-image__image").src = this._link;
        document.querySelector(".popup-image__image").alt = this._name;
        document.querySelector(".popup-image__image-caption").textContent = this._name;
      }); 
    }
  }