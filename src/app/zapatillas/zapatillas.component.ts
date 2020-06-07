import { Component, OnInit } from '@angular/core'
import { Zapatilla } from '../models/zapatilla'
import { ZapatillaService} from '../services/zapatilla.service'
import { __spread } from 'tslib';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    providers: [
        ZapatillaService
    ]
})

export class ZapatillasComponent implements OnInit {
    public titulo: string = "Componente de zapatillas";
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];
    public color: string;
    public mi_marca: string;

    constructor(
        private _zapatillaService: ZapatillaService
    ) {
        this.marcas = [];
        this.color = "yellow";
        this.mi_marca = "Estolaca";
    }

    ngOnInit() {
        this.zapatillas = this._zapatillaService.getZapatilllas();
        alert(this._zapatillaService.getTexto())
        this.getMarcas();
    }


    getMarcas() {
        this.zapatillas.forEach((zapatilla, index) => {
            if (this.marcas.indexOf(zapatilla.marca) < 0) {
                this.marcas.push(zapatilla.marca);
            }
            //console.log(index)
        });
    }

    getMarca() {
        console.log(this.mi_marca);
    }
    addMarca() {
        this.marcas.push(this.mi_marca);
    }

    borrarMarca(index){
        this.marcas.splice(index,1);
    }
    onBlur(){
        console.log("has salido del input")
    }
    mostrarPalabra(){
        alert(this.mi_marca)
    }


}