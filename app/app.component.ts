import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { Hike } from './shared/hike';
import { HikeService } from './shared/hike.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    hikes: Hike[];

    constructor(private _hikeService: HikeService){ }

    ngOnInit() {
        // this.hikes = this._hikeService.getHikes();
        // console.log(this.hikes);    
        this._hikeService.getHikesFromAPI()
                            .subscribe(
                                res => this.hikes = res,
                                err => console.error(err.status));
    }


}
