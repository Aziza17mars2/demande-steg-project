import { Component } from '@angular/core';

@Component({
  selector: 'app-verfication-unitee',
  templateUrl: './verfication-unitee.component.html',
  styleUrls: ['./verfication-unitee.component.css']
})
export class VerficationUniteeComponent {
  isAccepted: boolean = false;
  showSendToSection: boolean = false;
  showSaveButton: boolean = false;
  showRefuseSection: boolean = false; // Ajout de la propriété showRefuseSection
  showRefuseButton = false;

  showSendMessage: boolean = false;


}