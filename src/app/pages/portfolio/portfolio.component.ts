import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { faGithub,faHackerrank } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private _location:Location) { }
  
  github = faGithub;
  hr = faHackerrank;

  ngOnInit() {
  }

  goBack(){
    this._location.back();
  }
}
