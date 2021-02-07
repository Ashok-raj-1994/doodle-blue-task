import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

declare var self: any;
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  // contactArray = [];
  @ViewChild('sendMessageContent') sendMessageContent: ElementRef;
  @ViewChild('addContactContent') addContactContent: ElementRef;


  constructor(private modalService: NgbModal) {
    self = this;
  }

  // constructor() { }
  userDetails = {};
  selectedUser;
  editDetails: any;
  editIndex;
  sendMessageTo;

  addContact(contact) {
    if (contact)
      this.contactArray.unshift(contact);
  }

  updateContact(contact) {
    this.contactArray[this.editIndex] = contact;
  }


  getProfileImage(name) {

    name = name.split(' ');
    let shortName = name[0][0];

    if (name[1]) {
      shortName = shortName + name[1][0];
    }
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

  getDetails(details) {
    this.userDetails = details;
  }

  ngOnInit(): void {
    let c = [];
    for (let i = 0; i < 10; i++) {
      c.push(i)
    }
    this.userDetails = this.contactArray[0]
    //this.contactArray = c.slice();
  }


  contactArray = [{
    name: "Steve Jobs",
    company: "Apple",
    email: "stevejobs@apple.com",
    phone: "+9329302323"
  }, {
    name: "Bill Gates",
    company: "Microsoft",
    email: "billgates@microsoft.com",
    phone: "+9329302323"
  }, {
    name: "Steve Balmer",
    company: "Microsoft",
    email: "stevebalmer@microsoft.com",
    phone: "+9329302323"
  }, {
    name: "Jack Dorsey",
    company: "Twitter",
    email: "jackdorsey@twitter.com",
    phone: "+9329302323"

  }]


}
