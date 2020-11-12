import { Injectable } from '@angular/core';
import { UserProfile } from './interfaces/user-profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  userProfile: UserProfile={
    name:"Joseph Sardashti",
    contact:"josephsardashti@gmail.com",
    bio:"¯\\\_(ツ)_/¯"
  }
  constructor() { }

  getUserProfile = ()=>{
    return this.userProfile;
  };

  setUserProfile = (userProfile:UserProfile):void=>{
    this.userProfile = userProfile;
  }
}
