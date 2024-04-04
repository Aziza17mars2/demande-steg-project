import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuichetComponent } from './login-guichet/login-guichet.component';
import { MenusGuichetComponent } from './menus-guichet/menus-guichet.component';
import { VoirLesDemandeComponent } from './voir-les-demande/voir-les-demande.component';
import { VoirLesDemandesRefuseesComponent } from './voir-les-demandes-refusees/voir-les-demandes-refusees.component';
import { VoirLesDemandesAccepteesComponent } from './voir-les-demandes-acceptees/voir-les-demandes-acceptees.component';
import { VoirLesDemandesEnCoursComponent } from './voir-les-demandes-en-cours/voir-les-demandes-en-cours.component';
import { DetailleUserComponent } from './detaille-user/detaille-user.component';
import { RaisonDeRefusComponent } from './raison-de-refus/raison-de-refus.component';
import { DetailAcceptComponent } from './detail-accept/detail-accept.component';
import { DetailEnCoursComponent } from './detail-en-cours/detail-en-cours.component';
import { AcceuilGuichetComponent } from './acceuil-guichet/acceuil-guichet.component';
import { LoginIntComponent } from './login-int/login-int.component';
import { VoirDemandeUniteeComponent } from './voir-demande-unitee/voir-demande-unitee.component';
import { MenusUniteeComponent } from './menus-unitee/menus-unitee.component';
import { VerficationUniteeComponent } from './verfication-unitee/verfication-unitee.component';
import { AdminComponent } from './admin/admin.component';
import { DemandesArchiveesComponent } from './demandes-archivees/demandes-archivees.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { DemandeComponent } from './demande/demande.component';
import { DetaileeComponent } from './detailee/detailee.component';
import { DocumentComponent } from './document/document.component';
import { GuideComponent } from './guide/guide.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { MenuComponent } from './menu/menu.component';
import { PaiementComponent } from './paiement/paiement.component';
import { ResultComponent } from './result/result.component';
import { ResultatComponent } from './resultat/resultat.component';
const routes: Routes = [
  { path: '',component:AcceuilGuichetComponent},
  { path: 'acceuil-guichet',component:AcceuilGuichetComponent},
  { path: 'login-guichet', component: LoginGuichetComponent },
  { path: 'menus-guichet', component: MenusGuichetComponent }, // Assurez-vous que cette route est correcte
  { path: 'voir-les-demande', component: VoirLesDemandeComponent },
  { path: 'voir-les-demandes-refusees', component: VoirLesDemandesRefuseesComponent },
  { path: 'voir-les-demandes-acceptees', component: VoirLesDemandesAccepteesComponent },
  { path: 'voir-les-demandes-en-cours', component: VoirLesDemandesEnCoursComponent },
  { path: 'detaille-user', component: DetailleUserComponent},
  { path: 'raison-de-refus', component: RaisonDeRefusComponent },
  { path: 'detail-accept',component:DetailAcceptComponent},
  { path: 'detail-en-cours',component:DetailEnCoursComponent},
  { path: 'login-int',component:LoginIntComponent},
  { path: 'voir-demande-unitee',component:VoirDemandeUniteeComponent},
  { path: 'menus-unitee',component:MenusUniteeComponent},
  { path: 'verfication-unitee',component:VerficationUniteeComponent},
  { path: 'admin',component:AdminComponent},
  { path: 'demandes-archivees',component:DemandesArchiveesComponent},
  { path: 'accueil', component:AccueilComponent},
  { path: 'contact', component:ContactComponent},
  { path: 'demande', component:DemandeComponent},
  { path: 'detailee', component:DetaileeComponent},
  { path: 'document', component:DocumentComponent},
  { path: 'guide', component:GuideComponent},
  { path: 'inscription',component:InscriptionComponent},
  { path: 'loginuser',component:LoginuserComponent},
  { path: 'menu',component:MenuComponent},
  { path: 'paiement', component: PaiementComponent},
  { path: 'result', component:ResultComponent},
  { path: 'resultat',component:ResultatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
