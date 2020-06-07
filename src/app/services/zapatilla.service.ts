import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()

export class ZapatillaService {
    public zapatillas: Array<Zapatilla>;
    constructor() {
        this.zapatillas = [
            new Zapatilla('Reebook Classic', 'Reebok', 'Blanco', 80, true),
            new Zapatilla('Nike Runner MD', 'Nike', 'Blanco', 140, true),
            new Zapatilla('Adidas Yezzy', 'Adidas', 'Azul', 60, true),
            new Zapatilla('Nike Airmax', 'Nike', 'Rojas', 190, true),
            new Zapatilla('Adidas SuPadre', 'Adidas', 'Rojas', 40, false),
        ]
    }

    getTexto(){
        return "Hola Mundo desde mi primer servicio Angular"
    }

    getZapatilllas(): Array<Zapatilla> {
        return this.zapatillas
    }
}