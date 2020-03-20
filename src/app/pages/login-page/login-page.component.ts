import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  signInForm: FormGroup;
  inputerror = false;
  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private navCtr: NavController
    ) { }
  signForm() {
    this.signInForm = this.fb.group({
      signInEmail: ['', [Validators.required, Validators.email]],
      signInPassword: ['', [Validators.required, Validators.maxLength(16)]],
    });
  }
  ngOnInit() {
    this.signForm();
  }

  submitAction() {
    console.log(this.signInForm.value);
    if(this.auth.loginUser(this.signInForm.value)) {
    // this.router.navigate(['products'], { relativeTo: this.route });
    this.inputerror = false;
    this.navCtr.navigateForward(['products']);
    // this.navCtr.navigateForward(['products', 1]);
    } else {
      console.log('wrong input');
      this.inputerror = true;
      setTimeout(() => {
        this.inputerror = false;
      }, 4000);
    }
  }
}
