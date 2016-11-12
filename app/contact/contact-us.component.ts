import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ContactService } from './contact.service';

@Component({
    moduleId: module.id,
    templateUrl: 'contact-us.component.html'
})
export class ContactUsComponent {
    subject: string;
    content: string;

    constructor(private _contactService: ContactService) {

    }

    sendMessage(form: NgForm) {
        console.log(form.value);
        this._contactService.postContactForm(form.value);
    }
}