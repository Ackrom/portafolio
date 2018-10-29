import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
import { SocialNetwork } from '../../models/SocialNetwork';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private utils:UtilsService) { }

  private socialLinks:SocialNetwork[];

  ngOnInit() {
    if(localStorage.getItem('socialLinks') !== null)
      this.socialLinks = JSON.parse(localStorage.getItem('socialLinks'));
    // this.utils.setDefaultSocialNetworks();
    this.utils.getSocialNetworks()
    .subscribe((data)=>{
      // console.log("ContactComponent");
      // console.log(data);
      this.socialLinks = data;
      
      localStorage.setItem('socialLinks',JSON.stringify(data));
    },
    (error)=>{console.log("ContactComponent");console.log(error);});
  }

}
