import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from './clientes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-clientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-clientes.component.html',
  styleUrls: ['./admin-clientes.component.scss']
})
export class AdminClientesComponent implements OnInit {

  clientes: any[] = [];

  constructor(
    private router: Router,
    private clienteService: ClientesService
  ) {}

  ngOnInit() {
    this.carregarClientes();
  }

  carregarClientes() {
    this.clienteService.getClientes().subscribe(res => {
      this.clientes = res;
    });
  }

  editar(id: number) {
    this.router.navigate(['/admin-editarcliente', id]);
  }

  deletar(id: number) {
    if (confirm('Deseja realmente excluir este cliente?')) {
      this.clienteService.deletar(id).subscribe(() => {
        this.carregarClientes();
      });
    }
  }
}
