import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilizador } from '../class/utilizador';

@Injectable({
  providedIn: 'root'
})
export class UtilizadorService {

  private baseURL = "http://localhost:8080/api/v1/utilizadores"

  constructor(private httpClient: HttpClient) { }

  getListaUtlizadores(): Observable<Utilizador[]>{
    return this.httpClient.get<Utilizador[]>(`${this.baseURL}`);
  }

  criarUtilizador(utilizador: Utilizador): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, utilizador);
  }
  
  getUtilizadorById(id: number): Observable<Utilizador>{
    return this.httpClient.get<Utilizador>(`${this.baseURL}/${id}`);
  }

  atualizarUtilizador(id:number, utilizador: Utilizador): Observable<Object>{
    
    return this.httpClient.put(`${this.baseURL}/${id}`, utilizador) 
  }

  apagarUtilizador(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`)
  }
}
