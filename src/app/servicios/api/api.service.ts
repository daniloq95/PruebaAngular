import { Injectable } from '@angular/core';
import { LoginI } from '../../modelos/login.interface';
import { ResponseI } from '../../modelos/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatosI } from 'src/app/modelos/datos.interface';
import { DatosInt } from 'src/app/modelos/datoInte.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "http://api.solodata.es/";
  url2:string = "https://jsonplaceholder.typicode.com/"

  constructor(private http:HttpClient) { }
  
  loginByEmail(form:LoginI):Observable<ResponseI>{

    let direccion = this.url + "auth";
    
    return this.http.post<ResponseI>(direccion, form);

  }

  getDatos(dat:number):Observable<DatosI[]>{
    
    let direccion = this.url2 + "posts/";
    return this.http.get<DatosI[]>(direccion);

  }

  getDatosEdit(id):Observable<DatosInt[]>{

   let direccion = this.url2 + "posts/" + id;
   return this.http.get<DatosInt[]>(direccion);

  }

  putDatos(form:DatosInt):Observable<ResponseI>{
    let direccion = this.url2 + "posts/1";

    return this.http.put<ResponseI>(direccion, form);

  }

  deleteDatos(form):Observable<ResponseI>{

    let direccion = this.url2 + "posts/1";
    let options = {
      headers: new HttpHeaders({
        'Conten-type' : 'application/json'
      }),
      body : form
    }
    return this.http.delete<ResponseI>(direccion, options);


  }

  

}
