import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../models/Project';
import { PROJECT } from '../models/mocks/mock-Projec';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  getProjects():Observable<Project[]>{
    return of(PROJECT);
  }

}
