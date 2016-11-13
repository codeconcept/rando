import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Hike } from '../shared/hike';

@Component({
    moduleId: module.id,
    // ViewEncapsulation.Emulated allows external global style but local component style DON'T goes out
    // ViewEncapsulation.Native to ignore external global style
    // ViewEncapsulation.None allows local style to apply also externally
    encapsulation: ViewEncapsulation.Emulated, 
    styles: [`
        a {
            text-decoration: none;
        }

        a:hover {
            color: #999;
        }
    `
    ],
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