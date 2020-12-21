export default class UserInfo {
    constructor({userName, userJob}) {
        this._userName = userName;
        this._userJob = userJob;
    }

    getUserInfo() {  
      this._userName.textContent = userName.value;
      this._userJob.textContent = userJob.value;
      return {
          name: this._userName.textContent,
          info: this._userJob.textContent
        }         
      }
   
    setUserInfo({name, info}) {
      this._userName.textContent = name;
      this._userJob.textContent = info;
    }
}