import { Component } from '@angular/core';
import { LandingHeaderComponent } from '../components/landing-header/landing-header.component';
import { LandingPrincipalComponent } from '../components/landing-principal/landing-principal.component';
import { LandingObrasComponent } from '../components/landing-obras/landing-obras.component';
import { LandingMaquinasComponent } from '../components/landing-maquinas/landing-maquinas.component';
import { LandingSobreComponent } from '../components/landing-sobre/landing-sobre.component';
import { LandingDiferencialComponent } from '../components/landing-diferencial/landing-diferencial.component';
import { LandingEquipeComponent } from '../components/landing-equipe/landing-equipe.component';
import { LandingContatoComponent } from '../components/landing-contato/landing-contato.component';
import { LandingFooterComponent } from '../components/landing-footer/landing-footer.component';




@Component({
  selector: 'app-landingp',
  imports: [LandingHeaderComponent,
    LandingPrincipalComponent,
    LandingObrasComponent,
    LandingMaquinasComponent,
    LandingSobreComponent,
    LandingDiferencialComponent,
    LandingEquipeComponent,
    LandingContatoComponent,
    LandingFooterComponent,],
  templateUrl: './landingp.component.html',
  styleUrl: './landingp.component.scss',

})
export class LandingpComponent {

}
