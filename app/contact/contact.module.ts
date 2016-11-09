import { NgModule } from '@angular/core';
import  { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactUsComponent } from './contact-us.component';

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [ContactUsComponent],
  exports: [],
  providers: []
})
export class ContactModule {}