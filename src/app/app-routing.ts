import { Routes,RouterModule} from "@angular/router";
// Pages
import { CurriculumComponent } from "./pages/curriculum/curriculum.component";
import { PortfolioComponent } from "./pages/portfolio/portfolio.component";
import { MenuComponent } from "./pages/menu/menu.component";


const appRoutes: Routes = [ 
    {path:'',component:MenuComponent},
    {path:'curriculum',component:CurriculumComponent},
    {path:'portfolio',component:PortfolioComponent},
];

export const appRouting = RouterModule.forRoot(appRoutes);