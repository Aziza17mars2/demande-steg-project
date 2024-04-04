import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
//   formData = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     phoneNumber: '',
//     password: '',
//     confirmPassword: ''
//   };
// inscription: any;

//   constructor(private router: Router) { }

//   submitForm(): void {
//     // Vérification du prénom
//     if (!this.formData.firstName) {
//       alert('Le prénom est obligatoire.');
//       return;
//     }

//     // Vérification du nom
//     if (!this.formData.lastName) {
//       alert('Le nom est obligatoire.');
//       return;
//     }

    
//   // Vérification de l'e-mail
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
//   if (!this.formData.email || !emailRegex.test(this.formData.email)) {
//     alert('L\'e-mail va contenir un "." "t @ merci de verifier votre mail.');
//     return;
//   }
//     // Vérification du numéro de téléphone
//     if (!this.formData.phoneNumber || this.formData.phoneNumber.length < 8) {
//       alert('Le numéro de téléphone est invalide.');
//       return;
//     }

//     // Vérification du mot de passe
//     if (!this.formData.password || this.formData.password.length <8 ) {
//       alert('Le mot de passe doit contenir au moins 8 caractères.');
//       return;
//     }

//     // Vérification de la confirmation du mot de passe
//     if (this.formData.password !== this.formData.confirmPassword) {
//       alert('La confirmation du mot de passe ne correspond pas.');
//       return;
//     }
//   // Vérification si le mot de passe contient au moins une lettre majuscule et un chiffre
//   const passwordRegex = /^(?=.*[A-Z])(?=.*\d).+$/;
//   if (!passwordRegex.test(this.formData.password)) {
//     alert('Le mot de passe doit contenir au moins une lettre majuscule et un chiffre.');
//     return;
//   }
//     // Si toutes les validations passent, rediriger vers une autre page
//     this.router.navigate(['/demande']);
//   }
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private router: Router) { }

  submitForm(): void {
    // Vérifiez ici tous les champs de formulaire et affichez des alertes en cas d'erreur.
    // Si tout est valide, naviguez vers la page d'accueil.
    if (!this.formData.lastName) {
           alert('Le nom est obligatoire.');
            return;
           }
      
    this.router.navigate(['/accueil']);
  }
}
