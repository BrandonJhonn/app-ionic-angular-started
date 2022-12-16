import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Form Controls', url: '/folder/Form-Controls', icon: 'logo-vue' },
    { title: 'Alert And Toast', url: '/folder/Alert-And-Toast', icon: 'logo-angular' },
    { title: 'Aditional Controls', url: '/folder/Aditional-Controls', icon: 'logo-react' },
  ];
  public labels = [
    'Single Responsability', 
    'Open/Closed', 
    'Liskov Substitution', 
    'Iterface Segregation', 
    'Dependency Inversion'];
  constructor() {}
}
