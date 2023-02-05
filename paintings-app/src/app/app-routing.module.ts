import { NgModule } from '@angular/core';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule), 
    
  },
  {
    path: 'paintings',
    loadChildren: () => import('./paintings/paintings.module').then((m) => m.PaintingsModule),
    canLoad: [AuthGuard],
    canActivate:[AuthGuard]
  },
  {
    path: '404',
    component: ErrorPageComponent,
  },
  {
    path: '**',
    // component: ErrorPageComponent,
    redirectTo: '404',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
