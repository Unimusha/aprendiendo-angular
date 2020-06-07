import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
    selector: 'videojuego',
    templateUrl: "./videojuego.component.html"
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {
    public titulo: string;
    public listado: string;

    constructor() {
        this.titulo = "Compoenente de Videojuegos";
        this.listado = "Listado de los juegos más populares";
        console.log("Se ha cargado el componente: videojuego.ts")
    }

    ngOnInit(): void {
        //console.log("Cursos ha arrancado");
    }

    ngDoCheck(): void {
//console.log("DoCheck ejecutado");
    }

    ngOnDestroy(): void {
       // console.log("OnDestroy ejecutado")

    }
    cambiarTitulo(): void {
        this.titulo = "Titulo ha cambiado";
    }
}