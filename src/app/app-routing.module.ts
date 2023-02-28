import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageTabsComponent } from './page-tabs/page-tabs.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'home',
    component: PageTabsComponent,
    children: [
      {
        path: 'homePage',
        loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule)
      },
      {
        path: 'userPage',
        loadChildren: () => import('./user-page/user-page.module').then(m => m.UserPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
