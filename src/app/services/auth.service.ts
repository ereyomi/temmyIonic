import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  defaultUser: User = {
      id: 1,
      username: 'social',
      email: 'social@bincom.net',
      password: 'social'
  };
  constructor() { }
  loginUser(formValue: {signInEmail: string, signInPassword: string}){
    console.log(formValue);
    if ((formValue.signInEmail === this.defaultUser.email)&&(formValue.signInPassword === this.defaultUser.password)) {
    console.log('you are logged in');
    return true;
    } else {
      console.log('you are not logged in');
      return false;
    }
  }
}
