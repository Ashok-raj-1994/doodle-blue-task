import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Contacts } from 'src/app/data/contacts';
import { messageHistoryData } from 'src/app/data/message-history';
import { NameServiceService } from 'src/app/services/name-service.service';

declare var self: any;
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  // contactArray = [];

  messageHistoryArray = messageHistoryData;
  @ViewChild('sendMessageContent') sendMessageContent: ElementRef;
  @ViewChild('addContactContent') addContactContent: ElementRef;
  @ViewChild('messageHistoryContent') messageHistoryContent: ElementRef;


  constructor(private modalService: NgbModal,
    private nameService: NameServiceService) {
    self = this;
  }

  // constructor() { }
  userDetails = {};
  selectedUser;
  editDetails: any;
  editIndex;
  sendMessageTo;

  addContact(contact) {
    if (contact) {
      contact = { ...contact, ...{ image: this.getProfileImage(contact.name) } }
      this.contactArray.push(contact);
    }
  }

  updateContact(contact) {
    contact = { ...contact, ...{ image: this.getProfileImage(contact.name) } }
    this.contactArray[this.editIndex] = contact;
  }

  addNewMessage(message) {
    let data = { ...message, ...{ from: this.selectedUser } };
    this.messageHistoryArray.push(data);
  }

  getProfileImage(name) {

    const shortName = this.nameService.getShortName(name);

    const randomColor = "" + ((1 << 24) * Math.random() | 0).toString(16);

    return `https://via.placeholder.com/150/${randomColor}/FFFFFF?text=${shortName}`

  }



  sendMessage(details) {
    this.sendMessageTo = details;
    this.modalService.open(this.sendMessageContent);
  }

  addContactPopup() {
    this.editDetails = "";
    this.modalService.open(this.addContactContent);
  }

  editContact(details, i) {
    this.editDetails = details;
    this.editIndex = i;
    this.modalService.open(this.addContactContent);
  }

  messageHistory() {
    this.modalService.open(this.messageHistoryContent, { size: 'lg' });
  }

  recieveMessage(details) {

  }

  getDetails(details) {
    this.userDetails = details;
  }

  ngOnInit(): void {
    this.contactArray.forEach(contact => {
      contact['image'] = this.getProfileImage(contact.name);
    });
    this.selectedUser = Contacts[0].name;
    this.userDetails = Contacts[0];
  }


  contactArray = Contacts;

}
