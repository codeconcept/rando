import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { HikeListComponent }  from './hike-list.component';
import { HikeService } from '../shared/hike.service';
import { HikeDetailsComponent } from './hike-details.component';

@NgModule({
  imports:      [ CommonModule, HttpModule, RouterModule ],
  declarations: [ HikeListComponent, HikeDetailsComponent ],
  exports: [HikeListComponent],
  providers: [ HikeService ]
})
export class HikeModule {}