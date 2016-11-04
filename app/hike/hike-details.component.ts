import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
 
@Component({
    moduleId: module.id,
    templateUrl: 'hike-details.component.html'
})
export class HikeDetailsComponent implements OnInit {
    title: string;

    constructor(private _route: ActivatedRoute){}

    ngOnInit() {
        let id = this._route.snapshot.params['id'];
        this.title = `Détails de la randonnée ${id}`;

    }

}