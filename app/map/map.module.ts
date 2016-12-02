import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AgmCoreModule } from 'angular2-google-maps/core/core-module';

import { MapComponent } from './map.component';

@NgModule({
    imports : [ 
        CommonModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBW0utZH-JccVwhkgPAcXR2HYsnGOCtZJU'
        }),
        RouterModule.forChild([
            { path: 'map', component: MapComponent}
        ])         
    ],
    declarations: [ MapComponent ]
})
export class MapModule {
}