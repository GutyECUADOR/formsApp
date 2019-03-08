import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

  public usuario = {
    nombre: '',
    apellido: '',
    correo: '',
  };

  constructor() { }

  submitForm(refForm: NgForm) {

    if (refForm.valid) {
      console.log('Usuario', this.usuario);
      console.log('WebForm', refForm);
    }

  }
}
