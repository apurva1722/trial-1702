import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myfirstngapp');

  FirstName ='Apurva';
  LastName = 'Alhat';
  age = 22 ;
  gender = 'female';
  email = 'apurvaalhat@gmail.com';

  hobbies = ['Sleeping', 'Cooking', 'Studying', 'Watching TV', 'Sports']

  greetUser(){
    alert('Wecome to Angular');
  }

  addHobby(hobby: string){
    this.hobbies.push(hobby);
  }
}


