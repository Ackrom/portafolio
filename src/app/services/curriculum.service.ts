import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
//models
import { Study } from '../models/Study';
import { Summary } from '../models/Summary';
import { ToolOrTecnology } from '../models/ToolOrTecnology';
//mocks
import { STUDIES } from '../models/mocks/mock-Study';
import { SUMARY } from '../models/mocks/mock-Summary';
import { TOOLS_TECNOLOGY } from '../models/mocks/mock-ToolOrTecnology';
//firebase
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  constructor(private afs:AngularFirestore) { 
    this.studyCollection = afs.collection<Study>('Study');
    this.studyItems = this.studyCollection.valueChanges();

    this.summaryCollection = afs.collection<Summary>('Summary');
    this.summaryItems = this.summaryCollection.valueChanges();

    this.toolOrTecCollection = afs.collection<ToolOrTecnology>('ToolOrTecnology');
    this.toolOrTecItems = this.toolOrTecCollection.valueChanges();
  }

  private studyCollection: AngularFirestoreCollection<Study>;
  studyItems: Observable<Study[]>;

  private summaryCollection: AngularFirestoreCollection<Summary>;
  summaryItems: Observable<Summary[]>;

  private toolOrTecCollection: AngularFirestoreCollection<ToolOrTecnology>;
  toolOrTecItems: Observable<ToolOrTecnology[]>;
  
  getStudies():Observable<Study[]>{
    return this.studyItems;
  }

  getSummary():Observable<Summary[]>{
    return this.summaryItems;
  }

  getToolsOrTecnologies():Observable<ToolOrTecnology[]>{
    return this.toolOrTecItems;
  }

  setDefaultStydies(){
    STUDIES.forEach(data=>{
      this.studyCollection.add(data);
    });
  }

  setDefaultSummary(){
    this.summaryCollection.add(SUMARY);
  }

  setDefaultTecnologyOrTool(){
    TOOLS_TECNOLOGY.forEach(data=>{
      this.toolOrTecCollection.add(data);
    });
  }
}
