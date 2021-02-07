import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent implements OnInit {

  @Input() sendMessageTo;

  constructor(public activeModal: NgbActiveModal,
    public modalService: NgbModal) { }
  // constructor() { }
  ngOnInit(): void {
  }

}
