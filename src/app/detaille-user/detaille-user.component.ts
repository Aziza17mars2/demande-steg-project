import { Component } from '@angular/core';

@Component({
  selector: 'app-detaille-user',
  templateUrl: './detaille-user.component.html',
  styleUrls: ['./detaille-user.component.css']
})
export class DetailleUserComponent {
  isAccepted: boolean = false;
  showSendToSection: boolean = false;
  showSaveButton: boolean = false; // Déclaration de la propriété showSaveButto

  accept() {
    // Implémentez la logique pour accepter ici
    this.isAccepted = true;
    this.showSaveButton = true; // Afficher le bouton "Enregistrer" lorsque le bouton "Accepter" est cliqué
    
  }

  save() {
    // Implémentez la logique de sauvegarde ici
    // Par exemple, vous pouvez simplement afficher un message dans la console pour le moment
   
   console.log("Données sauvegardées avec succès!");
   this.showSendToSection = true;

  }

  showSendTo() {
    // Implémentez la logique pour afficher la section "Envoyer vers" ici
    // Par exemple, vous pouvez simplement inverser la valeur de showSendToSection pour afficher ou masquer la section
    this.showSendToSection = !this.showSendToSection;
  }
  validerOperation() {
    alert("Validation avec succès !");
  }
  refuserOperation() {
    alert("Message de refus envoyé");
  }
  

}
