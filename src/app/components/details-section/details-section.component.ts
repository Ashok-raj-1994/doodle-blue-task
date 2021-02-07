import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-section',
  templateUrl: './details-section.component.html',
  styleUrls: ['./details-section.component.scss']
})
export class DetailsSectionComponent implements OnInit {

  constructor() { }

  @Input('userDetails') userDetails;
  ngOnInit(): void {
  }

}
