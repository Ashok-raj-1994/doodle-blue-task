import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})


export class AddContactComponent implements OnInit {
  @Input() editDetails;
  @Output() addContactEmit = new EventEmitter();
  @Output() updateContact = new EventEmitter();



  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    company: new FormControl('', Validators.required)
  });

  constructor(public activeModal: NgbActiveModal,
    public modalService: NgbModal) { }


  ngOnInit(): void {
    if (this.editDetails) {
      this.contactForm.patchValue(this.editDetails);
    }
  }


  addNewContact() {

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    if (this.editDetails) {
      this.updateContact.emit(this.contactForm.value);
    } else {
      this.addContactEmit.emit(this.contactForm.value);
    }
    this.modalService.dismissAll();
  }

  errors(field) {
    return this.contactForm.get(field).hasError('required') &&
      this.contactForm.get(field).touched;

  }

}
