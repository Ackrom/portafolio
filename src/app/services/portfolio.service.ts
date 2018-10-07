import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../models/Project';
import { PROJECT } from '../models/mocks/mock-Projec';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private afs:AngularFirestore) { 
    this.projectCollection = afs.collection<Project>('Project');
    this.projectItems = this.projectCollection.valueChanges();
  }

  private projectCollection: AngularFirestoreCollection<Project>;
  projectItems: Observable<Project[]>;

  getProjects():Observable<Project[]>{
    return this.projectItems;
  }

  setDefaultprojects(){
    PROJECT.forEach(data=>{
      this.projectCollection.add(data);
    });
  }

}
