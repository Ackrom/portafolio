import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Study } from '../models/Study';
import { Summary } from '../models/Summary';
import { ToolOrTecnology } from '../models/ToolOrTecnology';
import { STUDIES } from '../models/mocks/mock-Study';
import { SUMARY } from '../models/mocks/mock-Summary';
import { TOOLS_TECNOLOGY } from '../models/mocks/mock-ToolOrTecnology';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  constructor() { }

  
  getStudies():Observable<Study[]>{
    return of(STUDIES);
  }

  getSummary():Observable<Summary>{
    return of(SUMARY);
  }

  getToolsOrTecnologies():Observable<ToolOrTecnology[]>{
    return of(TOOLS_TECNOLOGY);
  }
}
