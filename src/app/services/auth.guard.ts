import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AutenticacaoService } from './autenticacao.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AutenticacaoService);
  const router = inject(Router);

  if (auth.isLogado()) {
    return true; 
  } else {
    router.navigate(['/login']); 
    return false;
  }
};
