import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { Project } from '../../models/Project';

@Component({
  selector: 'app-code-projects',
  templateUrl: './code-projects.component.html',
  styleUrls: ['./code-projects.component.css']
})
export class CodeProjectsComponent implements OnInit {

  constructor(private portfolio:PortfolioService) { }

  projects:Project[]

  ngOnInit() {
    if(localStorage.getItem('projects') !== null)
      this.projects = JSON.parse(localStorage.getItem('projects'));
    // this.portfolio.setDefaultprojects();
    this.portfolio.getProjects()
    .subscribe((data)=>{
      // console.log("CodeProjectsComponent");
      // console.log(data);
      this.projects = data;
      
      localStorage.setItem('projects',JSON.stringify(data));
    },
    (error)=>{console.log("CodeProjectsComponent");console.log(error);});
  }

}
