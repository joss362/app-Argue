import { Component, inject } from '@angular/core';
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from '@angular/forms'
import { hasEmailError, isRequired } from '../../utils/validators';
import { AuthService } from '../../data-access/auth.service';
import { toast } from 'ngx-sonner';
import { Router } from '@angular/router';

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
  private _authService =inject(AuthService);
  private _router= inject(Router);

  isRequired(field: 'email' | 'password') {
    return isRequired(field, this.form);

  }

  hasEmailError(){
    return hasEmailError(this.form);
  }

  form = this._formBuilder.group<FormSingUp>({
    email: this._formBuilder.control('', [Validators.required,Validators.email]),
    password:this._formBuilder.control('', Validators.required),
  })

  async submit(){
    if(this.form.invalid) return;

    try {
      const {email,password}=this.form.value;

    if(!email || !password) return;

  
    await this._authService.singUp({email, password });
    toast.success('El usuario fue creado correctamente');
    this._router.navigateByUrl('/task');  
    } catch (error) {
      toast.error('Lastimosamente ocurrio un error');
    }
  }

}
