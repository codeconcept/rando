import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HikeListComponent }  from './hike-list.component';
import { HikeService } from '../shared/hike.service';
import { HikeDetailsComponent } from './hike-details.component';
import { HikeFilterPipe } from '../hike/hike-filter.pipe';

@NgModule({
  imports:      [ CommonModule, HttpModule, RouterModule, FormsModule ],
  declarations: [ HikeListComponent, HikeDetailsComponent, HikeFilterPipe ],
  exports: [HikeListComponent],
  providers: [ HikeService ]
})
export class HikeModule {}