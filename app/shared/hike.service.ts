import { Injectable } from '@angular/core';
import {Http } from '@angular/http';

import { Hike } from './hike';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';


@Injectable()
export class HikeService {

    hikes: Hike[] = [		
        {	 
            "name": "Saint-Aubin-du-Cormier",		
            "region": "Bretagne",	
            "area": "Ille-et-Vilaine",          		
            "startingPoint": "Plan d'eau",		
             "distance": 12.8,		
             "distanceUnit": "km",		
             "duration": 240,		
             "heightDifference": 267,		
             "description": "Randonnée sympa, à démarrer par le plan d'eau pour finir sur les hauteurs de Saint Aubin. Rochers imposants et des arbres magnifiques sont effectivement au rendez-vous. Bonne balade",		
             "evalution": [4, 5, 3]		
         },		
         {		
             "name": "Vallée du Couesnon",		
             "region": "Bretagne",		
             "area": "Ille-et-Vilaine",		
             "startingPoint": "Château de la ville olivier",		
             "distance": 15.6,		
             "distanceUnit": "km",		
             "duration": 270, 		
             "heightDifference": 200,		
             "description": "Il faut être en forme pour cette rando car il y a beaucoup de dénivelés. Mais le jeu en vaut la chandelle car admirer les bords du Couesnon est un régal. Bonne randonnée ",		
             "evalution": [5, 5]		
         }		
     ];

    private data: any;
    private observable: Observable<any>;
    private url: string = 'app/api/hikes.json';

    BASE_URL = 'http://localhost:3003/api';

    constructor(private _http:Http) {
        
    }

    getHikes() {
        return this.hikes;
    }

    getHikesFromAPI() {
        return this._http.get(`${this.BASE_URL}/hikes`)
            .do(x => console.log(x))
            .map(hikes => hikes.json())
            .catch(error => {
                let errorMessage = `Une erreur ${error.status} est survenue en tentant de joindre ${error.url}`;
                return Observable.throw(errorMessage);
            });
    }

    getHikesFromAPIwithCache() {       

        if(this.data) {
            return Observable.of(this.data);
        } else if(this.observable) {
            return this.observable;
        } else {
            this.observable = this._http
                    .get(`${this.BASE_URL}/hikes`)
                    .map(response => {
                        this.observable = null;
                        this.data = response.json();
                        return this.data;
                    })
                    .catch(error =>{
                        let errorMessage = `Une erreur ${error.status} est survenue en tentant de joindre ${error.url}`;
                        return Observable.throw(errorMessage);
                    });
                    return this.observable;
        }

    }

    getHikeById(id: any) {
        if(!this.data) {
            return undefined;
        }
        const result = this.data.filter((hike:any) => hike.id === id);
        if(result.length > 0) {
            return result[0];
        }
    }
}