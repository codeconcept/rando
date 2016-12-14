import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer} from 'rxjs/Observer';

declare var google: any;

@Injectable()
export class MapService { 
    constructor() {
    }

    getLatLng(address: string) {        
        let geocoder = new google.maps.Geocoder();
        return Observable.create((observer: any) => {
            geocoder.geocode( { 'address': address}, function(results: any, status: any) {
                if (status == google.maps.GeocoderStatus.OK) {
                    console.log(results[0]);
                    observer.next(results[0]);
                    observer.complete();
                } else {
                    console.log('erreur :', results, ' - status : ', status);
                    observer.next({});
                    observer.complete();
                }
            });
        })
    }    
}