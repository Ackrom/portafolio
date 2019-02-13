import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { faGithub,faHackerrank,faTwitter,faFacebook,faLinkedin } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  github = faGithub;
  hr = faHackerrank;
  twitter = faTwitter;
  face = faFacebook;
  link = faLinkedin;
  
  ngOnInit() { }

}
