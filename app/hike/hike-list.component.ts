import { Component, OnInit } from '@angular/core';

import { Hike } from '../shared/hike';
import { HikeService } from '../shared/hike.service';

@Component({
    moduleId: module.id,
    templateUrl: 'hike-list.component.html'
})
export class HikeListComponent  implements OnInit {
    hikes: Hike[];
    searchTerm: string;

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
