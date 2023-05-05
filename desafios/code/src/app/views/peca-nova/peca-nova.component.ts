import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import { FormBuilder, FormGroup, MinLengthValidator, FormArray, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-peca-nova',
  templateUrl: './peca-nova.component.html',
  styleUrls: ['./peca-nova.component.css']
})
export class PecaNovaComponent implements OnInit {
  public pecaForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.pecaForm = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
      email:['',Validators.compose([Validators.required,Validators.email])],
      telefone: ['',Validators.required],
      idade:['',Validators.compose([Validators.required, Validators.min(0)])],
      nascimento:['',Validators.required],
      genero:['',Validators.required],
    });
  }

  async submit() {

    if (this.pecaForm.invalid || this.pecaForm.pending) {
       return
    }

    const objetoPeca = this.pecaForm.value;

    console.log('Peca' , objetoPeca);

  }
}
