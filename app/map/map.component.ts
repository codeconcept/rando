import { Component, OnInit } from '@angular/core';
import {GoogleMapsAPIWrapper} from 'angular2-google-maps/core';
import { MapService } from './map.service';

declare var google:any;

@Component({
    moduleId: module.id,
    selector: 'hike-map',
    templateUrl: 'map.component.html',
    styleUrls: [ 'map.component.css' ]
})
export class MapComponent implements OnInit {
    // Mézières-sur-Couesnon    
    lat: number = 48.30725;
    lng: number =  -1.43307;
    icon: string = "app/map/images/yellowmarker.png";

    markerWasDropped: boolean = false;
    droppedLat: number;
    droppedLng: number;
    startingPoint: string = "La ville Ollivier, 35140 Mézières-sur-Couesnon, France";
    markerTitle: string = "déplacer le marqueur pour récupérer des coordonnées";
    markers: marker[] = [];
    markersFromCoords: marker[] = [];
  

    constructor(private _mapService: MapService) {

    }

    ngOnInit() {    
        // this.initMarkerByCoords();        
    }

    geocode() {
       this._mapService
            .getLatLng(this.startingPoint)
            .subscribe(
                data => this.placeMarkerOnGeocodedPlace(data),
                err => console.error(err)
            );
    }

    placeMarkerOnGeocodedPlace(location: any) {  
               
        let marker = {
            lat: parseFloat(location.geometry.location.lat()),
            lng: parseFloat(location.geometry.location.lng()),
            title: location.formatted_address,
            draggable: true
        };

        this.markers  = [ ...this.markers, marker];
        console.log(this.markers);        
    }

    onCoordMarkerDropped(event: any) {
        console.log(event);
        this.markerWasDropped = true;
        this.droppedLat = event.coords.lat.toFixed(5);
        this.droppedLng = event.coords.lng.toFixed(5);
    }   

    addMarkerByCoords(formValue: any) {        
        let marker = {lat: 0, lng: 0, draggable: false, icon: "", title: ""};
        marker.lat = parseFloat(formValue.markerByCoordsLat);
        marker.lng = parseFloat(formValue.markerByCoordsLng);
        marker.draggable = false;
        marker.title = "";
        marker.icon = "app/map/images/greenmarker.png";
        this.markersFromCoords.push(marker);
    }

    initMarkerByCoords() {
        this.markersFromCoords = this.markersFromCoords.concat([
            { lat: 48.390394, lng: -4.486076, draggable: false, title: "Brest", icon: "app/map/images/greenmarker.png" },
            { lat: 48.649337, lng: -2.025674, draggable: false, title: "Saint Malo", icon: "app/map/images/greenmarker.png" },
            { lat: 48.006110, lng: 0.199556, draggable: false, title: "Le Mans", icon: "app/map/images/greenmarker.png" }
        ]);
    }
        
}

interface marker{    
    lat: number;
    lng: number;
    title?: string;
    icon?: string;
    draggable:boolean;
  }
