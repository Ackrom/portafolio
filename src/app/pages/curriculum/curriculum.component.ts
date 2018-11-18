import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {

  constructor(private _location:Location,private utils:UtilsService) { }

  curriculumLink:string;
  active:boolean;

  ngOnInit() {
    this.active = true;
    if(localStorage.getItem('curriculumLink') !== null)
      this.curriculumLink = JSON.parse(localStorage.getItem('curriculumLink'));
    this.utils.getPersonalInformation()
    .subscribe((data)=>{
      // console.log("CurriculumComponent");
      // console.log(data);
      this.curriculumLink = data[0].curriculumLink
      
      localStorage.setItem('curriculumLink',JSON.stringify(data[0].curriculumLink));
    },
    (error)=>{console.log("CurriculumComponent");console.log(error);});
  }
  goBack(){
    this._location.back();
  }
  changeTab(){
    this.active = !this.active;
  }
}
