import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-message-history',
  templateUrl: './message-history.component.html',
  styleUrls: ['./message-history.component.scss']
})
export class MessageHistoryComponent implements OnInit {

  @Input() messageHistoryArray;
  @Input() selectedUser;
  sentMessage = [];
  recievedMessage = [];
  constructor(public activeModal: NgbActiveModal,
    public modalService: NgbModal) { }

  ngOnInit(): void {
    this.getSentMessage();
    this.getReceivedMessage();
  }

  getSentMessage() {
    this.sentMessage = this.messageHistoryArray.filter((message) => {
      if (message.from === this.selectedUser)
        return message;
    })
  }

  getReceivedMessage() {
    this.recievedMessage = this.messageHistoryArray.filter((message) => {
      if (message.to === this.selectedUser)
        return message;
    })
    console.log(this.recievedMessage)
  }

}
