import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service'

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {
  public user: any;
  public userTPV: any;
  public userId: any;
  public userIdTPV: any;
  public fecha: any;
  public new_user: any;
  public usuario_guardado: any;

  constructor(
    private _peticionesService: PeticionesService
  ) {
    this.userId = 1;
    this.userIdTPV = 1;
    this.new_user = {
        "name": "",
        "job": ""
    }
    this.usuario_guardado = {
      "name": "",
      "job": ""
    }
  }

  ngOnInit(): void {
    this.cargaUsuario()
    this.fecha = new Date(2019,5,20);
  }

  cargaUsuario() {
    this.user = false;
    this._peticionesService.getUser(this.userId).subscribe(
      result => {
        this.user = result.data
        console.log(this.user)
      },
      error => {
        console.log(<any>error)
      }
    );
  }
  cargaUsuarioTPV() {
    this.userTPV = false;
    this._peticionesService.getUserTPV(this.userIdTPV).subscribe(
      result => {
        this.userTPV = result
        console.log(this.userTPV)
      },
      error => {
        console.log(<any>error)
      }
    );
  }


  onSubmit(form){
    this._peticionesService.addUser(this.new_user).subscribe(
      response => {
        console.log(response)
        this.usuario_guardado = response
        form.reset();
      },
      error =>{
        console.log(<any>error)
      }

    )

  }
}
