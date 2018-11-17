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
  private columns:Study[][];
  private active:boolean;

  ngOnInit() {
    this.active = true;
    // this.curriculum.setDefaultStydies();
    if(localStorage.getItem('studies') !== null){
      this.studies = JSON.parse(localStorage.getItem('studies'));
      this.columns = this.toColumns(this.studies);
    }
    this.curriculum.getStudies()
    .subscribe((data)=>{
      // console.log("StudyComponent");
      // console.log(data);
      this.studies = data;
      this.columns = this.toColumns(data);
      localStorage.setItem('studies',JSON.stringify(data));
    },
    (error)=>{console.log("StudyComponent");console.log(error);});
  }
  toColumns(data:Study[]):Study[][]{
    let size = data.length;
    let output:Study[][] = new Array(3);

    output[0] = new Array(0);
    for(let i=0;i<Math.round(size/3);i++){
      output[0].push(data[i]);
    }

    output[1] = new Array(0);
    for(let i=Math.round(size/3);i<Math.round(size/3)*2;i++){
      output[1].push(data[i]);
    }
    
    output[2] = new Array(0);
    for(let i=Math.round(size/3)*2;i<size;i++){
      output[2].push(data[i]);
    }

    return output;
  }

  changeTab(){
    this.active = !this.active;
  }
}
