import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from '../admin-clientes/clientes.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-cadastroclientes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-cadastroclientes.component.html',
  styleUrls: ['./admin-cadastroclientes.component.scss']
})
export class AdminCadastroclientesComponent implements OnInit {

  cliente: any = {
    nome: '',
    cpf: '',
    telefone: '',
    email: '',
    cep: '',
    endereco: '',
    numero: '',
    bairro: '',
    estado: ''
  };

  modoEdicao = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clienteService: ClientesService
  ) {}

ngOnInit(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));

  if (id) {
    this.modoEdicao = true;
    this.clienteService.getClientePorId(id).subscribe(res => {
      this.cliente = { ...res, id: id }; 
    });
  }
}

 salvar() {
  
  if (this.modoEdicao) {
    this.clienteService.atualizar(this.cliente).subscribe(() => {
      alert('Cliente atualizado com sucesso!');
      this.router.navigate(['/admin-clientes']);
    });
   } else {
    const clienteSemId = { ...this.cliente };
    delete clienteSemId.id; 

this.clienteService.adicionar(clienteSemId).subscribe(() => {
      alert('Cliente cadastrado com sucesso!');
      this.router.navigate(['/admin-clientes']);
    });
  }
}}