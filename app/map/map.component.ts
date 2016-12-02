import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'hike-map',
    templateUrl: 'map.component.html',
    styleUrls: [ 'map.component.css' ]
})
export class MapComponent implements OnInit {
    lat: number = 48.30740;
    lng: number =  -1.43276;

    markerWasDropped: boolean = false;
    droppedLat: number;
    droppedLng: number;

    ngOnInit() {}

    onCoordMarkerDropped(event: any) {
        console.log(event);
        this.markerWasDropped = true;
        this.droppedLat = event.coords.lat.toFixed(5);
        this.droppedLng = event.coords.lng.toFixed(5);
    }
        
}