import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
import { PersonalInformation } from '../../models/PersonalInformation';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  constructor(private util:UtilsService) { }

  private myInfo:PersonalInformation;

  ngOnInit() {
    // this.util.setDefaultPersonalInformation();
    this.util.getPersonalInformation()
    .subscribe((data)=>{
      // console.log("HeadComponent");
      // console.log(data);
      this.myInfo = data[0];
    },
    (error)=>{console.log("HeadComponent");console.log(error);});
  }

}
