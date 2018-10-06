import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PersonalInformation } from '../models/PersonalInformation';
import { SocialNetwork } from '../models/SocialNetwork';
import { MY_INFORMATION } from '../models/mocks/mock-PersonalInformation';
import { SOCIAL } from '../models/mocks/mock-SocialNetwork';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  getPersonalInformation():Observable<PersonalInformation>{
    return of(MY_INFORMATION);
  }

  getSocialNetworks():Observable<SocialNetwork[]>{
    return of(SOCIAL);
  }
}
