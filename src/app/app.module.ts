import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { LeftSideBarComponent } from './components/left-side-bar/left-side-bar.component';
import { SendMessageComponent } from './components/send-message/send-message.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailsSectionComponent } from './components/details-section/details-section.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    LeftSideBarComponent,
    SendMessageComponent,
    AddContactComponent,
    DetailsSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
    // NgbModule
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
