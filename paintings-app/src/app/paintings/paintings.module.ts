import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { PaintingComponent } from './pages/painting/painting.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { PaintingsRoutingModule } from './pages/paintings-routing.module';
import { PaintingCardComponent } from './components/painting-card/painting-card.component';
import { ImagePipe } from './pipes/image.pipe';
import { FormsModule } from '@angular/forms';
import { ConfirmComponent } from './components/confirm/confirm.component';

@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    PaintingComponent,
    HomeComponent,
    ListComponent,
    PaintingCardComponent,
    ImagePipe,
    ConfirmComponent,
  ],
  imports: [
    CommonModule, 
    FormsModule,
    FlexLayoutModule, 
    MaterialModule,
    PaintingsRoutingModule
  ],
})
export class PaintingsModule {}
