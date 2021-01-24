

export default class Api {
  constructor(url, token) {
    this._url = url;
    this._token = '291fbf0b-aea4-4df1-846d-97af6ab6d687';
    }

  getInitialCards() {
     return fetch('https://mesto.nomoreparties.co/v1/cohort-19/cards', {
        headers: {
            authorization: this._token,
            'Content-Type': 'application/json'  
       }
     })
     .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
     })
     .catch((err) => {
        console.log(err);
     })
  }

  getUserInfo() {
      return fetch('https://mesto.nomoreparties.co/v1/cohort-19/users/me', {
        headers: {
            authorization: this._token,
            'Content-Type': 'application/json'  
       }  
      })
      .then((res) => {
          if (res.ok) {
              return res.json();
          }
          return Promise.reject(`Ошибка: ${res.status}`);
      }) 
      .catch((err) => {
          console.log(err);
      })
  }

  editProfile(data) {
      return fetch('https://mesto.nomoreparties.co/v1/cohort-19/users/me', {
          method: 'PATCH',
          headers: {
            authorization: this._token,
            'Content-Type': 'application/json'  
       },
       body: JSON.stringify({
        name: data.name,
        about: data.occupation,
        avatar: data.avatar,
        id: data.id
       })  
      })
      .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
     })
     .catch((err) => {
        console.log(err);
     })
  }

  addCard(data) {
      return fetch('https://mesto.nomoreparties.co/v1/cohort-19/cards', {
        method: 'POST',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'   
        },
        body: JSON.stringify({
            name: data.place,
            link: data.cite
           })  
      })
      .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
     })
     .catch((err) => {
        console.log(err);
     })
    } 
  
  addLike() {
    
  }  
}