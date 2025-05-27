import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor() {}

  login(email: string, senha: string): boolean {
    const emailCorreto = 'admin';
    const senhaCorreta = '123456';

    if (email === emailCorreto && senha === senhaCorreta) {
      localStorage.setItem('usuarioLogado', 'true');
      return true;
    }

    return false;
  }

  logout() {
    localStorage.removeItem('usuarioLogado');
  }

  isLogado(): boolean {
    return localStorage.getItem('usuarioLogado') === 'true';
  }
}
