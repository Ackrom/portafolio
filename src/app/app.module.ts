import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ROUTER
import { appRouting } from "./app-routing";

// COMPONETS
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
    MenuComponent
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
