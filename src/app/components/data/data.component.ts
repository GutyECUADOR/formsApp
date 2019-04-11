import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Observable } from 'rxjs';


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
        nombre: new FormControl('', [Validators.required, Validators.minLength(3), this.noJoseValidation]),
        apellido: new FormControl('', [Validators.required, Validators.minLength(3)])
      }),
      nickName: new FormControl('', Validators.required, this.checkNickName),
      correo: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      items: new FormArray([
        new FormControl('Televisor')
      ]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl(''),
    });

    // Otra forma de agregar validaciones, utilizamos el bind para agregar un contexto al this ya que no existe en el scope de las funcioens
    this.formulario.controls.confirmPassword.setValidators([Validators.required, this.checkPassword.bind(this.formulario)]);
  }

  ngOnInit() {
  }

  loadingData() {
    this.formulario.setValue(this.solicitud);
  }

  checkPassword(formControl: FormControl): { [key: string]: boolean } {

    // console.log(this);
    const formaInFuncions: any = this;

    if (formControl.value !== formaInFuncions.controls.password.value ) {
      return { noiguales: true };
    }
  }

  checkNickName(formControl: FormControl): Promise<any> | Observable<any> {

    const verificacion = new Promise((resolve, reject) => {

      // Emulacion de proceso asincrono
      setTimeout(() => {
        if (formControl.value !== 'Guty') {
          return resolve(null);
        } else {
          return resolve({ nickNameNotDisponible: true });
        }
      }, 3000);

    });
    return verificacion;
  }


  noJoseValidation(formControl: FormControl): { [key: string]: boolean} {

    if (formControl.value === 'jose') {
      return { noJose: true };
    }
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
