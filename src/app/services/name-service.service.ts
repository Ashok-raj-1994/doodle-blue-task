import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameServiceService {

  constructor() { }

  getShortName(name) {

    if (!name) {
      return "";
    }
    name = name.split(' ');
    let shortName = name[0][0];

    if (name[1]) {
      shortName = shortName + name[1][0];
    }
    return shortName;
  }
}
