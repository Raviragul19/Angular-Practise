import { Component } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
constructor(private formBuild:FormBuilder){}

registeration=this.formBuild.group({
  username: ['',Validators.required],
      password: [''],
      reenterPassword: [''],
      address:this.formBuild.group({
        city: [''],
        state: [''],
      })
})

  // registeration = new FormGroup({
  //   username: new FormControl(''),
  //   password: new FormControl(''),
  //   reenterPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //   }),
  // });




  loadData() {
    this.registeration.setValue({
      username: 'ravi',
      password: 'rav',
      reenterPassword: 'rav',
      address: {
        city: 'tirupur',
        state: 'tn',
      }
    });
  }
}
