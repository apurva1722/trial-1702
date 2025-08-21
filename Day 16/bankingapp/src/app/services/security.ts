import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Security implements CanActivate{
    
    isUserLoggedIn = false;
    userName ='Nikhil';
    password = '1234';
    Loginmessage = 'Please Login';
    jwt_token = 'algo to generate or store the jwt token'; 


    canActivate(): boolean {

      if(this.userName =='Nikhil' && this.password == '1234')
      {
        this.isUserLoggedIn = true;
        this.Loginmessage = 'Welcome ' + this.userName;
        return true;
      }
      else
      {
        this.isUserLoggedIn = false;
        this.Loginmessage = 'Invalid Credentials';
        return false;
      }

     
    }
}
