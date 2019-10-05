import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from "./layouts/main-page/main/main.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'layout',
    pathMatch: 'full',
  },
  {
    path: 'layout',
    component: MainComponent,
    children: [
      
       { path: '', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)}, // Home
      // { path: 'admin', loadChildren: () => import('./A_SuperAdmin/admin.module').then(m => m.AdminModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
