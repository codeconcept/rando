import { Component, Input } from '@angular/core';
import { Hike } from '../shared/hike';

@Component({
    moduleId: module.id,
    selector: "hike-summary",
    templateUrl: "hike-summary.component.html"
})
export class HikeSummary {
    @Input() hike: Hike;
}