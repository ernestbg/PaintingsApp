import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { PaintingComponent } from './painting/painting.component';
import { AddComponent } from './add/add.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'add',
        component: AddComponent,
      },
      {
        path: 'edit/:id',
        component: AddComponent,
      },

      {
        path: 'search',
        component: SearchComponent,
      },
      {
        path: ':id',
        component: PaintingComponent,
      },
      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaintingsRoutingModule {}
