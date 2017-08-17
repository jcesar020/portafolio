import { RouterModule, Routes } from "@angular/router";

import {
  AboutComponent,
  PortafolioComponent,
  ProductoComponent
} from "./component/index.paginas";

const APP_ROUTES: Routes =[
  { path:'home', component: PortafolioComponent },
  { path:'about', component: AboutComponent },
  { path:'producto', component: ProductoComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'home' }
]

export const app_routing = RouterModule.forRoot(APP_ROUTES)
