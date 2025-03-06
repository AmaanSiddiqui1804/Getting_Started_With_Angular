import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-intro';
  imgUrl = "assets/BridgeLabzLogo.jpg";
  url = "https://www.bridgelabz.com";
  userName: string = "";
  nameError: string = "";

  ngOnInit(): void {
    this.title = 'Hello Amaan from BridgeLabz';
  }

  onClick($event:any) {
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  }

  onInput($event:any) {
    const enteredName = $event.target.value;
    console.log("Change Event Occured!", $event.data);
    const nameRegex = /^[A-Z]{1}[a-zA-Z\\s]{2,}$/ ;
    if (nameRegex.test(enteredName)) {
      this.nameError = "";
      return;
    }else {
    this.nameError = "Name is Incorrect!";
    }
  }
}