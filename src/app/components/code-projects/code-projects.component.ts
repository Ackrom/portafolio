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

  private projects:Project[]

  ngOnInit() {
    this.portfolio.getProjects()
    .subscribe((data)=>{
      console.log("CodeProjectsComponent");
      console.log(data);
      this.projects = data;
    },
    (error)=>{console.log("CodeProjectsComponent");console.log(error);});
  }

}
