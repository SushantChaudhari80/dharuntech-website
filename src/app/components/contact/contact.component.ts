import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({selector:'app-contact',standalone:true,imports:[ReactiveFormsModule],templateUrl:'./contact.component.html',changeDetection:ChangeDetectionStrategy.OnPush})
export class ContactComponent {
 protected submitted=false;
 protected readonly form;
 constructor(private readonly fb:FormBuilder){
   this.form=this.fb.nonNullable.group({name:['',Validators.required],email:['',[Validators.required,Validators.email]],phone:[''],company:[''],service:['',Validators.required],message:['',Validators.required]});
 }
 protected submit():void{
   if(this.form.invalid){this.form.markAllAsTouched(); return;}
   this.submitted=true;
   this.form.reset();
 }
}
