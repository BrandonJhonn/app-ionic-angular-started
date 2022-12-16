import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  imports: [IonicModule]
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
