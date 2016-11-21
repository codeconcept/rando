import { NgModule } from '@angular/core';
import  { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ContactUsComponent } from './contact-us.component';
import { ContactService } from './contact.service';

@NgModule({
  imports: [ CommonModule, 
             FormsModule, 
             RouterModule.forChild([
               { path: 'contact', component: ContactUsComponent }
             ]) 
           ],
  declarations: [ContactUsComponent],
  exports: [],
  providers: [ContactService]
})
export class ContactModule {}