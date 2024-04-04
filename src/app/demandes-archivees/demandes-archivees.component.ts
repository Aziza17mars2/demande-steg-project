// demandes-archivees.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-demandes-archivees',
  templateUrl: './demandes-archivees.component.html',
  styleUrls: ['./demandes-archivees.component.css']
})
export class DemandesArchiveesComponent {
  matriculeFiscale: string = '';
  dateDebut: string = '';
  dateFin: string = '';

  archives: { mois: string, annee: number, matricules: string[] }[] = [
    { mois: 'Janvier', annee: 2023, matricules: ['123', '456'] },
    { mois: 'Février', annee: 2023, matricules: ['789', '012'] },
    { mois: 'Mars', annee: 2023, matricules: ['345', '678'] },
    // Ajoutez d'autres données d'exemple ici
  ];

  search(): void {
    // Filtrer les archives en fonction des critères de recherche
    this.archives = this.archives.filter(archive =>
      (archive.matricules.includes(this.matriculeFiscale)) &&
      (this.isDateInRange(archive.mois, archive.annee, this.dateDebut, this.dateFin))
    );
  }

  isDateInRange(mois: string, annee: number, dateDebut: string, dateFin: string): boolean {
    // Convertir les dates en objets Date
    const debut = new Date(dateDebut);
    const fin = new Date(dateFin);

    // Récupérer la date de l'archive
    const dateArchive = new Date(`${mois} 1, ${annee}`);

    // Vérifier si la date de l'archive est dans la plage de dates spécifiée
    return dateArchive >= debut && dateArchive <= fin;
  }
}
