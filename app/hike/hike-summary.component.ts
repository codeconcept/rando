import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hike } from '../shared/hike';

@Component({
    moduleId: module.id,
    selector: "hike-summary",
    templateUrl: "hike-summary.component.html"
})
export class HikeSummary {
    @Input() hike: Hike;
    @Output() togglehikeasfavorite = new EventEmitter<Hike>();
   
    toggleAsTodoHike(isAdded:any) {
        console.log(event);
        if(isAdded) {
            this.hike.dateAddedAsTodo = Date.now();
            this.togglehikeasfavorite.emit(this.hike);
        } else {
            delete this.hike.dateAddedAsTodo;
            this.togglehikeasfavorite.emit(this.hike);
        }
    }

}