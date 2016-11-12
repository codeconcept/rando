import { Component, OnInit } from '@angular/core';

import { Hike } from '../shared/hike';
import { HikeService } from '../shared/hike.service';
import { HikeSummary } from './hike-summary.component';

@Component({
    moduleId: module.id,
    templateUrl: 'hike-list.component.html',
    styles: ['ul {  list-style-type: none; padding: 0; margin: 0}']
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

    addToMyTodoHikes(hikeToAdd: Hike) {
        console.log(`Hike ${hikeToAdd.name} added on ${hikeToAdd.dateAddedAsTodo}`);
        console.log(JSON.stringify(hikeToAdd));
    }

}
