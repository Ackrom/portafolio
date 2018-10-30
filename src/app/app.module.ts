import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ROUTER
import { appRouting } from "./app-routing";

// ICONS
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

// COMPONENTS
import { AppComponent } from './app.component';
import { StudyComponent } from './components/study/study.component';
import { TecnologyAndToolsComponent } from './components/tecnology-and-tools/tecnology-and-tools.component';
import { CodeProjectsComponent } from './components/code-projects/code-projects.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeadComponent } from './components/head/head.component';

// PAGES
import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';


import { environment } from "../environments/environment";
// FIREBASE
import { AngularFireModule } from "@angular/fire";
import { AngularFirestore } from "@angular/fire/firestore";
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutMeComponent } from './components/about-me/about-me.component';


@NgModule({
  declarations: [
    AppComponent,
    StudyComponent,
    TecnologyAndToolsComponent,
    CodeProjectsComponent,
    ResumeComponent,
    ContactComponent,
    HeadComponent,
    CurriculumComponent,
    PortfolioComponent,
    MenuComponent,
    ContactPageComponent,
    NavbarComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    appRouting,
    AngularFireModule.initializeApp(environment.firebase),
    FontAwesomeModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
