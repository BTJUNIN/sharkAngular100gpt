import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private apiUrl = 'http://localhost:3000/clientes';

  constructor(private http: HttpClient) {}

  getClientes() {
  return this.http.get<any[]>(this.apiUrl);
}

getClientePorId(id: number) {
  return this.http.get<any>(`${this.apiUrl}/${id}`);
}

adicionar(cliente: any) {
  return this.http.post<any>(this.apiUrl, cliente);
}

atualizar(cliente: any) {
  return this.http.put<any>(`${this.apiUrl}/${cliente.id}`, cliente);
}

deletar(id: number) {
  return this.http.delete<any>(`${this.apiUrl}/${id}`);
}
}