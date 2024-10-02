import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(public httpClient: HttpClient) { }

  //public getRoutes():Observable<Respuesta>{
    //return this.httpClient.get("/ws/get-routes"); //Esto es una petición asíncrona (promesa)

  }

