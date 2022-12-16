import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';

import { FormsComponent } from '../components/forms/forms.component';
import { AlertsComponent } from '../components/alerts/alerts.component';
import { CalendarComponent } from '../components/calendar/calendar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    FormsComponent, AlertsComponent, CalendarComponent
  ],
  declarations: [FolderPage]
})
export class FolderPageModule {}
