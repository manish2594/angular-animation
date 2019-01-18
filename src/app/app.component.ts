import { Component } from '@angular/core';
import { fade, slide, bounceLeftOut } from './animations/anamtion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fade, slide, bounceLeftOut]
})
export class AppComponent {
  title = 'angular-animation';
  items: any[] = ['manish', 'aman', 'suman'];
  inputValue: String = '';
  deleteItem(index) {
    this.items.splice(index, 1);
  }
  addItem() {
    this.items.unshift(this.inputValue);
    this.inputValue = '';
  }
}
