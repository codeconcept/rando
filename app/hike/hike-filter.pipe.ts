import { PipeTransform, Pipe } from '@angular/core';
import { Hike } from '../shared/hike';

@Pipe({
    name: 'hikeFilter'
})
export class HikeFilterPipe implements PipeTransform {

    transform(value: Hike[], searchTerm: string = '') {
        if(searchTerm !== '') {
            let result = value.filter((hike: Hike) => hike.description.toLowerCase().includes(searchTerm) 
                                                        || hike.name.toLowerCase().includes(searchTerm));
            return result;
        } else {
            return value;
        }        
    }
} 