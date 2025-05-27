import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../../services/autenticacao.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  senha = '';
  mensagem = '';

  constructor(
    private router: Router,
    private authService: AutenticacaoService
  ) {}

  login() {
    const sucesso = this.authService.login(this.email, this.senha);

    if (sucesso) {
      this.mensagem = 'logado com sucesso paie';
      this.router.navigate(['/admin']);
    } else {
      this.mensagem = 'Email ou senha inválidos!';
    }
  }
}
