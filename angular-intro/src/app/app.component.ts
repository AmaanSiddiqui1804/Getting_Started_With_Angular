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

  ngOnInit(): void {
    this.title = 'Hello Amaan from BridgeLabz';
  }

  onClick($event:any) {
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  }
}