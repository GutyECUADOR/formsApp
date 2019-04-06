import { Component} from '@angular/core';
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
    pais: 'ECU',
    sexo: '',
    aceptaTerminos: false
  };

  public paises = [
    {
      codigo: 'ECU',
      nombre: 'Ecuador'
    },
    {
      codigo: 'PER',
      nombre: 'Peru'
    },
    {
      codigo: 'COL',
      nombre: 'Colombia'
    }
  ];

  public sexos = [
    {
      codigo: 'H',
      nombre: 'Hombre'
    },
    {
      codigo: 'M',
      nombre: 'Mujer'
    },
    {
      codigo: 'SN',
      nombre: 'Sin Definir'
    }
  ];

  constructor() { }

  submitForm(refForm: NgForm) {

    if (refForm.valid) {
      console.log('Usuario', this.usuario);
      console.log('WebForm', refForm);
    }

  }
}
