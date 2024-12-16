import { Component, inject } from '@angular/core';
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from '@angular/forms'
import { isRequired } from '../../utils/validators';

interface FormSingUp{
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}
@Component({
  selector: 'app-sing-up',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './sing-up.component.html',
  styles: ``
})
export default class SingUpComponent {
  private _formBuilder =inject(FormBuilder);

  isRequired(field: 'email' | 'password'){
    return isRequired(field, this.form);

  }

  form = this._formBuilder.group<FormSingUp>({
    email: this._formBuilder.control('', [Validators.required,Validators.email]),
    password:this._formBuilder.control('', Validators.required),
  })

  submit(){
    if(this.form.invalid) return;

    const {email,password}=this.form.value;

    if(!email || !password) return;

    console.log({email,password})
  }

}
