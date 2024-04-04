// admin.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent   {
 // Variables pour stocker les messages d'erreur
 nomError: string = '';
 prenomError: string = '';
 telError: string = '';
 ageError: string = '';
 fonctionError: string = '';

 submitForm(event: Event) {
   event.preventDefault(); // Empêcher la soumission du formulaire par défaut

   // Réinitialiser les messages d'erreur
   this.nomError = '';
   this.prenomError = '';
   this.telError = '';
   this.ageError = '';
   this.fonctionError = '';

   // Récupérer les valeurs des champs du formulaire
   const nom = (document.querySelector('input[name="nom"]') as HTMLInputElement).value.trim();
   const prenom = (document.querySelector('input[name="prenom"]') as HTMLInputElement).value.trim();
   const tel = (document.querySelector('input[name="tel"]') as HTMLInputElement).value.trim();
   const age = (document.querySelector('input[name="age"]') as HTMLInputElement).value.trim();
   const fonction = (document.querySelector('input[name="fonction"]') as HTMLInputElement).value.trim();

   // Valider les champs
   if (!nom) {
     this.nomError = 'Veuillez saisir votre nom.';
   }

   if (!prenom) {
     this.prenomError = 'Veuillez saisir votre prénom.';
   }

   if (!tel) {
     this.telError = 'Veuillez saisir votre numéro de téléphone.';
   } else if (!tel.match(/^\d{8}$/)) {
     this.telError = 'Le numéro de téléphone doit contenir exactement 8 chiffres.';
   }

   if (!age) {
     this.ageError = 'Veuillez saisir votre âge.';
   }

   if (!fonction) {
     this.fonctionError = 'Veuillez saisir votre fonction.';
   } else if (!(fonction === 'guichet unique' || fonction === 'ddi' || fonction === 'ht')) {
     this.fonctionError = 'La fonction doit être "guichet unique", "ddi" ou "ht".';
   }

   // Si tous les champs sont valides, soumettre le formulaire
   if (!this.nomError && !this.prenomError && !this.telError && !this.ageError && !this.fonctionError) {
     alert('Formulaire valide ! Vous pouvez soumettre le formulaire ou effectuer d\'autres actions.');
     // Vous pouvez soumettre le formulaire ici
   }
 }
}