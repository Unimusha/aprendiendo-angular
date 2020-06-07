import {Injectable} from '@angular/core'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import { HtmlParser } from '@angular/compiler';


@Injectable()

export class PeticionesService{
    public url: string;
    public urlTPV: string;

    constructor(
        public _http: HttpClient
    ){
        this.url = "https://reqres.in/"
        this.urlTPV = "http://localhost:8080/"
    }

    getUser(userId): Observable<any>{
        return this._http.get(this.url + 'api/users/' + userId)
    }
    getUserTPV(userId): Observable<any> {
        return this._http.get(this.urlTPV + 'api/usuarios/' + userId)
    }

    addUser(user): Observable<any>{
        let json = JSON.stringify(user);
        let headers = new HttpHeaders().set("Content-Type", "application/json");

        return this._http.post(this.url+"api/users",json,{headers: headers})
    }
}