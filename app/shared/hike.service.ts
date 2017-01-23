import { Injectable } from '@angular/core';
import {Http } from '@angular/http';

import { Hike } from './hike';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';


@Injectable()
export class HikeService {

    private data: any;
    private observable: Observable<any>;
    private url: string = 'app/api/hikes.json';

    constructor(private _http:Http) {
        
    }

    // getHikes() {
    //     return this.hikes;
    // }

    getHikesFromAPI() {
        return this._http.get('app/api/hikes.json')
            .do(x => console.log(x))
            .map(hikes => hikes.json())
            .catch(error => {
                let errorMessage = `Une erreur ${error.status} est survenue en tentant de joindre ${error.url}`;
                return Observable.throw(errorMessage);
            });
    }

        getHikesFromAPIwithCache() {
        if(this.data) {
            // il est IMPORTANT de retourner un observable
            console.log('from cache');
            return Observable.of(this.data); 
        } else if(this.observable) {
            // une requete est en cours
            return this.observable;
        } else {            
            return this._http
                        .get(this.url)
                        .map(response =>  {                
                            this.observable = null;
                            if(response.status === 400) {
                                return "error 400";
                            } else if(response.status === 200) {
                                console.log('request API endpoint');
                                // mise en cache ici
                                this.data = response.json();
                                return this.data;
                            }                
                        });                     
        }
    }

    getHikeById(id: any){
        if(!this.data) {
            return undefined;
        }
        const result = this.data.filter((rando:any) => rando.id === id);
        if(result.length > 0){
            return result[0];
        } else {
            return [];
        }
    }
}