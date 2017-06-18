import { PipeTransform, Pipe } from '@angular/core';
import { Hike } from '../shared/hike';

@Pipe({
    name: 'hikeFilter'
})
export class HikeFilterPipe implements PipeTransform {

    transform(value: Hike[], searchTerm: string = '') {
        if(searchTerm !== '') {
            let result = value.filter((hike: Hike) => hike.description.toLowerCase().includes(searchTerm.toLowerCase()) 
                                                        || hike.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()));
            return result;
        } else {
            return value;
        }        
    }
} 