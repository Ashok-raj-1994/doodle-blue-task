import { Component, Input, OnInit } from '@angular/core';
import { NameServiceService } from 'src/app/services/name-service.service';

@Component({
  selector: 'app-details-section',
  templateUrl: './details-section.component.html',
  styleUrls: ['./details-section.component.scss']
})
export class DetailsSectionComponent implements OnInit {

  constructor(private nameService: NameServiceService) { }

  @Input('userDetails') userDetails;
  ngOnInit(): void {
  }


  getProfileImage(name) {

    const shortName = this.nameService.getShortName(name);


    return `https://via.placeholder.com/150/f0d54f/FFFFFF?text=${shortName}`

  }

}
