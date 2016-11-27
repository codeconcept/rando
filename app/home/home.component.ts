import { Component, OnInit, trigger, state, animate, style, transition, keyframes } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styles: [`
        .frame { margin-bottom: 10px; padding: 10px; border: 5px solid #eeeeee; height: 170px }
        .citation { font-size: 20px; color: #3268ba }
    `],
    animations: [       

        trigger('animateCitation', [
			transition('stateA <=> stateB', [
				animate(600, keyframes([
				style({opacity: .5, offset: 0}),
				style({opacity: 1, color: '#fcb514', offset: .5}),
				style({opacity: .7, offset: 1}),
				style({opacity: 1, offset: 1})
				]))
			])
		]), 

        // trigger('animateCitation', [
		// 	transition('stateA <=> stateB', [
		// 		animate(600, style({ transform: 'rotate(360deg)'}) )
		// 	])
		// ]),


        trigger('toggleElement', [
			state('open', style({ 'height': '*'})),
			state('closed', style({ 'height': '0px', 'font-size': '0px' })),

			transition('closed <=> open', [
				animate('500ms ease-out')
			])
		])
    ]
})
export class HomeComponent  {

    index: number = 0;
    quotes: quote[] = [
        {
            id: 0, 
            text:"En vérité, je ne voyage pas, moi, pour atteindre un endroit précis, mais pour marcher : simple plaisir de voyager. ",
            author: 'Robert Louis Stevenson'
        },
        {
            id: 2, 
            text:"Mon pied droit est jaloux de mon pied gauche. Quand l'un avance, l'autre veut le dépasser. Et moi, comme un imbécile, je marche ! ",
            author: "Raymond Devos"
        },
        {
            id: 1, 
            text:"Le plus long de tous les voyages commence par un tout petit pas",
            author: "proverbe chinois"
        },
    ];

    quote: quote = this.quotes[0];
    animateCitation: string = 'stateB';
    flag: boolean = false;

    open: boolean = false;
    toggleElement: string = "closed";

    toggle() {
        this.open = !this.open;
        if(this.open) {
            this.toggleElement = 'open';
        } else {
            this.toggleElement = "closed";            
        }
    }

    getPreviousQuote() {
        this.animateCitation = this.animateCitation === 'stateA' ? 'stateB' : 'stateA';
        this.getSomeQuote(-1);
    }

    getNextQuote() {
        this.animateCitation = this.animateCitation === 'stateA' ? 'stateB' : 'stateA';
        this.getSomeQuote(1);
    }

    getSomeQuote(increment: number) {       
        this.index = this.index + increment;

        // if last item of the array and user keeps on going next
        if(this.index >= this.quotes.length && increment === 1) {
            this.index = 0;
        }

        // if first item of the array and user keeps on going backward
        if(this.index < 0 && increment === -1) {
            this.index = this.quotes.length - 1;
        }
        this.quote = this.quotes[this.index];
    }

    log(event:any) {
        console.log(event);
    }

}

interface quote {
    id: number;
    text: string;
    author: string
}
