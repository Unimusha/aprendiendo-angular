import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  public nombre: string;
  public followers: number;
  
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    console.log("Se ha cargado el componente: cursos.ts")
   }

  ngOnInit(): void {
    console.log("Cursos ha arrancado");
    this._route.params.subscribe((params: Params)=>{
      console.log(params);
      this.nombre = params.nombre;
      this.followers = +params.followers;

      console.log(typeof +params.followers)
    });
  }

  redirigir(){
    this._router.navigate(["/zapatillas"])
  }


}
