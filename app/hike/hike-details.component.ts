import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HikeService } from '../shared/hike.service';
import { Hike } from '../shared/hike';

@Component({
    moduleId: module.id,
    templateUrl: 'hike-details.component.html'
})
export class HikeDetailsComponent implements OnInit {
    title: string;
    hike: Hike;

    constructor(private _route: ActivatedRoute, private _router: Router,private _hikeService: HikeService){}

    ngOnInit() {
        // '+' is used to cast the string to a number
        let id = +this._route.snapshot.params['id'];        
        this.title = `Détails de la randonnée ${id}`;
        this.hike = this._hikeService.getHikeById(id);
    }

    goBack() {
        this._router.navigate(['/hikes']);
    }

}