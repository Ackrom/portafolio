import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PersonalInformation } from '../models/PersonalInformation';
import { SocialNetwork } from '../models/SocialNetwork';
import { MY_INFORMATION } from '../models/mocks/mock-PersonalInformation';
import { SOCIAL } from '../models/mocks/mock-SocialNetwork';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private afs:AngularFirestore) { 
    this.personalInfCollection = afs.collection<PersonalInformation>('PersonalInformation');
    this.personalInfItems = this.personalInfCollection.valueChanges();

    this.socialCollection = afs.collection<SocialNetwork>('SocialNetwork');
    this.socialItems = this.socialCollection.valueChanges();
  }

  private personalInfCollection: AngularFirestoreCollection<PersonalInformation>;
  personalInfItems: Observable<PersonalInformation[]>;

  private socialCollection: AngularFirestoreCollection<SocialNetwork>;
  socialItems: Observable<SocialNetwork[]>;

  getPersonalInformation():Observable<PersonalInformation[]>{
    return this.personalInfItems;
  }

  getSocialNetworks():Observable<SocialNetwork[]>{
    return this.socialItems;
  }

  setDefaultPersonalInformation(){
    this.personalInfCollection.add(MY_INFORMATION);
  }

  setDefaultSocialNetworks(){
    SOCIAL.forEach(data=>{
      this.socialCollection.add(data);
    });
  }
}
