import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from 'angular2-google-maps/core/core-module';
import {GoogleMapsAPIWrapper} from 'angular2-google-maps/core';

import { MapComponent } from './map.component';
import { MapContentComponent } from './map-content.component';
import { MapService } from './map.service';

@NgModule({
    imports : [ 
        CommonModule,
        FormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBW0utZH-JccVwhkgPAcXR2HYsnGOCtZJU'
        }),
        RouterModule.forChild([
            { path: 'map', component: MapComponent}
        ])         
    ],
    declarations: [ MapComponent, MapContentComponent ],
    providers: [ GoogleMapsAPIWrapper, MapService ]
})
export class MapModule {
}