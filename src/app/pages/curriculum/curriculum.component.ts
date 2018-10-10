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

  private curriculumLink:string;

  ngOnInit() {
    this.utils.getPersonalInformation()
    .subscribe((data)=>{
      // console.log("CurriculumComponent");
      // console.log(data);
      this.curriculumLink = data[0].curriculumLink
    },
    (error)=>{console.log("CurriculumComponent");console.log(error);});
  }
  goBack(){
    this._location.back();
  }

}
