import { Injectable } from '@angular/core';
import { MensajeDTO } from '../mensaje-dto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicService {
  private publicoURL = "http://localhost:8080/api/publico";


  constructor(private http: HttpClient) { }
 

 
}
