import { Routes,RouterModule} from "@angular/router";
// Pages
import { CurriculumComponent } from "./pages/curriculum/curriculum.component";
import { PortfolioComponent } from "./pages/portfolio/portfolio.component";
import { MenuComponent } from "./pages/menu/menu.component";
import { ContactPageComponent } from "./pages/contact-page/contact-page.component";

const appRoutes: Routes = [ 
    {path:'',component:MenuComponent},
    {path:'curriculum',component:CurriculumComponent},
    {path:'portfolio',component:PortfolioComponent},
    {path:'contacto',component:ContactPageComponent},
];

export const appRouting = RouterModule.forRoot(appRoutes);