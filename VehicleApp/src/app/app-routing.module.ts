import { HomeGuard } from './guards/home.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Layout2Component } from './layout/layout-2/layout-2.component';
import { LayoutBlankComponent } from './layout/layout-blank/layout-blank.component';

import { NoPageComponent } from './error/no-page/no-page.component';
import { AppErrorComponent } from './error/app-error/app-error.component';
import { Layout1Component } from './layout/layout-1/layout-1.component';

const routes: Routes = [
  { path: '', component:  Layout1Component,  canActivate: [HomeGuard], loadChildren: './home/home.module#HomeModule' },
  { path: 'user', component: LayoutBlankComponent, loadChildren: './user/user.module#UserModule' },
  { path: 'error', component: AppErrorComponent },
  { path: '**', component: NoPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
