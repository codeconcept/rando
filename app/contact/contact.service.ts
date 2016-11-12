import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';


@Injectable() 
export class ContactService {
	
	constructor(private http:Http) {
	}

    
	postContactForm(contactForm: any) {
        console.log(contactForm);
	}

	// postContactForm(contactForm: any):Observable<any> {
    //     console.log(contactForm);
        
	// 	let body = JSON.stringify(contactForm);
	// 	let headers = new Headers({ 'Content-Type': 'application/json' });
	// 	let options = new RequestOptions({ headers: headers });
	// 	let url = 'http://localhost:3001';
	// 	return this.http.post(url, body, options)
	// 					.map( res => {
    //                         let body = res.json();
    //                         return body.fields || { };
    //                     })
	// 					.catch(err => {
    //                         console.error('postContactForm error: ', err)
	// 	                    return Observable.throw(err.statusText);
    //                     });
	// }
}