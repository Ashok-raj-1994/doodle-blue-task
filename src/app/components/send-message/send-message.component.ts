import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent implements OnInit {

  message: string;
  @Input() sendMessageTo;

  @Output() addNewMessage = new EventEmitter();

  constructor(public activeModal: NgbActiveModal,
    public modalService: NgbModal) { }
  // constructor() { }
  ngOnInit(): void {
  }

  send() {
    let data = {
      message: this.message,
      to: this.sendMessageTo.name
    }
    this.addNewMessage.emit(data);
    this.modalService.dismissAll();
  }

}
