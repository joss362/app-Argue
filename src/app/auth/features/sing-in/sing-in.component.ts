import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { toast } from 'ngx-sonner';
import { AuthService } from '../../data-access/auth.service';
import { isRequired, hasEmailError } from '../../utils/validators';

export interface FormSingIn{
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-sing-in',
  standalone:true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './sing-in.component.html',
  styles: ``
})
export default class SingInComponent {
  private _formBuilder =inject(FormBuilder);
    private _authService =inject(AuthService);
    private _router= inject(Router);
  
    isRequired(field: 'email' | 'password') {
      return isRequired(field, this.form);
  
    }
  
    hasEmailError(){
      return hasEmailError(this.form);
    }
  
    form = this._formBuilder.group<FormSingIn>({
      email: this._formBuilder.control('', [Validators.required,Validators.email]),
      password:this._formBuilder.control('', Validators.required),
    })
  
    async submit(){
      if(this.form.invalid) return;
  
      try {
        const {email,password}=this.form.value;
  
      if(!email || !password) return;
  
    
      await this._authService.singIn({email, password });
      toast.success('Secion iniciada correctamente');
      this._router.navigateByUrl('/task');  
      } catch (error) {
        toast.error('Lastimosamente ocurrio un error');
      }
    }

}
