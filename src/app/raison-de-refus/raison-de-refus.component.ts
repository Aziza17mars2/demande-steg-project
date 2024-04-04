import { Component } from '@angular/core';

@Component({
  selector: 'app-raison-de-refus',
  templateUrl: './raison-de-refus.component.html',
  styleUrls: ['./raison-de-refus.component.css']
})
export class RaisonDeRefusComponent {
  recipient: string = '';
  subject: string = '';
  message: string = '';
  submitted: boolean = false;

  sendEmail() {
    // Marquer le formulaire comme soumis
    this.submitted = true;

    // Vérifier si le formulaire est valide
    if (this.recipient && this.subject && this.message) {
      // Logique pour envoyer l'e-mail
      alert("Mail envoyé avec succès");
    } else {
      // Afficher une alerte si des champs sont vides
      alert("Veuillez remplir tous les champs avant d'envoyer !");
    }
  }
}
