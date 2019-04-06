import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  formulario: FormGroup;

  /* Objeto modelo, los valores no se registran en el */
  solicitud: object = {
    nombreCompleto : {
      nombre: 'Jose',
      apellido: 'Gutiérrez'
    },
    correo: 'soporte@hotmail.com',
    items: ['TV', 'Reloj', 'Radio']
  };

  constructor() {
    this.formulario = new FormGroup({
      nombreCompleto : new FormGroup({
        nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
        apellido: new FormControl('', [Validators.required, Validators.minLength(3)])
      }),
      correo: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      items: new FormArray([
        new FormControl('Televisor')
      ])
    });
  }

  ngOnInit() {
  }

  loadingData() {
    this.formulario.setValue(this.solicitud);
  }

  addNewItem() {
    (this.formulario.controls.items as FormArray).push(
      new FormControl('', Validators.required)
    );
  }

  resetForm() {
    this.formulario.reset();
  }

  saveData() {
    console.log(this.formulario);
  }

}
