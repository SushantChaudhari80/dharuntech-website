import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({selector:'app-contact',standalone:true,imports:[ReactiveFormsModule],templateUrl:'./contact.component.html',changeDetection:ChangeDetectionStrategy.OnPush})
export class ContactComponent {
 protected submitted=false;
 protected submitting=false;
 protected errorMessage='';
 protected readonly form;
 constructor(private readonly fb:FormBuilder, private readonly http:HttpClient){
   this.form=this.fb.nonNullable.group({name:['',Validators.required],email:['',[Validators.required,Validators.email]],phone:[''],company:[''],service:['',Validators.required],message:['',Validators.required]});
 }
 protected submit(): void {
  if (this.form.invalid) {
    this.form.markAllAsTouched();
    return;
  }

  alert('Thank you for contacting DharunTech.\n\nEmail Sender is currently under development.');

  this.form.reset();
}
}
