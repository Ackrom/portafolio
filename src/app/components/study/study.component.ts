import { Component, OnInit } from '@angular/core';
import { CurriculumService } from '../../services/curriculum.service';
import { Study } from '../../models/Study';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.css']
})
export class StudyComponent implements OnInit {

  constructor(private curriculum:CurriculumService) { }

  private studies:Study[];

  ngOnInit() {
    // this.curriculum.setDefaultStydies();
    this.curriculum.getStudies()
    .subscribe((data)=>{
      console.log("StudyComponent");
      console.log(data);
      this.studies = data;
    },
    (error)=>{console.log("StudyComponent");console.log(error);});
  }

}
