import { Component, OnInit } from '@angular/core';
import { CurriculumService } from '../../services/curriculum.service';
import { Summary } from '../../models/Summary';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor(private curriculum:CurriculumService) { }

  private summary:Summary

  ngOnInit() {
    // this.curriculum.setDefaultSummary();
    this.curriculum.getSummary()
    .subscribe((data)=>{
      // console.log("ResumeComponent");
      // console.log(data);
      this.summary = data[0];
    },
    (error)=>{console.log("ResumeComponent");console.log(error);});
    console.log("Resume onInit");
  }

}
