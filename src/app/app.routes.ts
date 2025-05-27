
import { authGuard } from './services/auth.guard';
import { Routes,RouterModule} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LandingpComponent } from './landingp/landingp.component';
import { AdminPainelComponent } from './components/admin-painel/admin-painel.component';
import { AdminClientesComponent } from './components/admin-clientes/admin-clientes.component';
import { AdminCadastroclientesComponent } from './components/admin-cadastroclientes/admin-cadastroclientes.component';
import { AdminCadoperariosComponent } from './components/admin-cadoperarios/admin-cadoperarios.component';
import { AdminOperariosComponent } from './components/admin-operarios/admin-operarios.component';
import { AdminCriarcontratosComponent } from './components/admin-criarcontratos/admin-criarcontratos.component';
import { AdminMaquinasComponent } from './components/admin-maquinas/admin-maquinas.component';
import { AdminCadmaquinasComponent } from './components/admin-cadmaquinas/admin-cadmaquinas.component';
import { AdminObrasComponent } from './components/admin-obras/admin-obras.component';





export const routes: Routes = [
    {path:'', component: LandingpComponent},
    {path:'login', component: LoginComponent},
    
    {path: 'admin', component: AdminPainelComponent, canActivate:[authGuard]},
    
    {path: 'admin-clientes', component: AdminClientesComponent},
    {path: 'admin-cadclientes', component:AdminCadastroclientesComponent, canActivate: [authGuard] }, 
    {path: 'admin-editarcliente/:id', component:AdminCadastroclientesComponent},
    
    {path:"admin-operarios",component:AdminOperariosComponent,canActivate:[authGuard]},
    {path:"admin-cadoperarios",component:AdminCadoperariosComponent,canActivate:[authGuard]},
    
    {path:"admin-obras",component:AdminObrasComponent},
    {path:"admin-criarcontratos", component:AdminCriarcontratosComponent,canActivate:[authGuard]},
    
   
    {path:"admin-maquinas", component:AdminMaquinasComponent,canActivate:[authGuard]},
    {path: "admin-cadmaquinas", component:AdminCadmaquinasComponent,canActivate:[authGuard]},

    


]
