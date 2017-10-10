import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { UserService } from './../../users/user.service';
import { UserModel } from './../../users/user.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pro-agendar',
  templateUrl: './agendar.component.html',
  styleUrls: ['./agendar.component.css']
})
export class AgendarComponent implements OnInit {

  public AgendaAluno: FormGroup;
  users: UserModel[];
  constructor(private userService: UserService,  private _sanitizer: DomSanitizer,  private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.AgendaAluno = this.formBuilder.group({
      aluno: this.formBuilder.control('', Validators.required),
      data: this.formBuilder.control('', Validators.required),
    });
    this.userService.users()
      .subscribe(
      users => this.users = users
      );
  }

  autocompleListFormatter = (data: any) : SafeHtml => {
    let html = `<span class="teste">${data.nome}</span>`;
    return this._sanitizer.bypassSecurityTrustHtml(html);
  }
}
