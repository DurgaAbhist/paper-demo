import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'paper-demo';
  links = [
    { href: '/level1', name: 'Label 1'},
    { href: '/level2', name: 'Label 2'},
    { href: '/level3', name: 'Label 3'},
  ];
}
