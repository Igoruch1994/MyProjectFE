import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users = [
    {name: 'Ihor'},
    {name: 'Ivan'},
    {name: 'Oleh'},
    {name: 'Andriy'}
  ];

}
