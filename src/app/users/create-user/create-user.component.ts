import { Observable } from 'rxjs/Rx';
import { UserService } from '../user.service';
import { UserModel } from '../user.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pro-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  numberPattern = /^[0-9]*$/;

  UserForm: FormGroup;
  endereco: any[] = [];
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService) { }


  ngOnInit() {
    this.UserForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(3)]),
      rg: this.formBuilder.control('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      cpf: this.formBuilder.control('', [Validators.required, Validators.minLength(14), Validators.maxLength(14)]),
      cep: this.formBuilder.control('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
      num: this.formBuilder.control('', [Validators.required, Validators.minLength(1)]),
      tel: this.formBuilder.control('', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]),
      cel: this.formBuilder.control('', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]),
      address: this.formBuilder.control('', Validators.required),
      bairro: this.formBuilder.control('', Validators.required),
     
      cidade: this.formBuilder.control('', Validators.required),
      uf: this.formBuilder.control('', Validators.required),
      inicio: this.formBuilder.control(''),
      comp: this.formBuilder.control(''),
      telOpc: this.formBuilder.control(''),
      pgt: this.formBuilder.control(''),
      categ: this.formBuilder.control(''),

    });
    this.UserForm.controls['cep'].valueChanges
    .debounceTime(500)
    .distinctUntilChanged()
    .switchMap(searchAddress => this.userService.address(searchAddress.replace(/[^0-9]+/g, ''))
    .catch(error => Observable.from([])))
    .subscribe(
      searchAddress => {this.UserForm.controls['address'].setValue(searchAddress.logradouro), 
      this.UserForm.controls['uf'].setValue(searchAddress.estado_info.nome),
      this.UserForm.controls['bairro'].setValue(searchAddress.bairro),
      this.UserForm.controls['cidade'].setValue(searchAddress.cidade)
    }
   );

  }

  checkUser(user: UserModel) {
    this.userService.cadastraUser(user).subscribe(
      (userValue) => console.log(userValue)
    );
  }


}
