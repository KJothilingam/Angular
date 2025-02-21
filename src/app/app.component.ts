import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Main-app/header/header.component';
import { FooterComponent } from './Main-app/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  standalone :true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
title= "standLone Project : ";

constructor(){
  console.log("constructor");
}

ngOnInit(){
  console.log("ngoninit");
  // this.changeTitle();
}

changeTitle(){
  this.title="Tittle-changed";
}


}
