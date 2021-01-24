export default class UserInfo {
  constructor({ userName, userJob, avatar, id }) {
    this._userName = userName;
    this._userJob = userJob;
    this._avatar = avatar;
    this._id = id;
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      about: this._userJob.textContent,
      avatar: this._avatar,
      id: this._id
    };
  }

  setUserAvatar(avatar) {
    this._avatar.style.backgroundImage = `url(${avatar})`;
  }

  setUserInfo({ name, about, avatar, id }) {
    this._userName.textContent = name;
    this._userJob.textContent = about;
    this._avatar.src = avatar;
    this._id = id;
  }
}
