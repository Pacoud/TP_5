import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ActiviteService } from '../services/activite';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-consult-act',
  styleUrl: './consult-act.scss',
  templateUrl: './consult-act.html',
})
export class ConsultAct {
  edition: boolean = false;
  titreSaisi:string = '';
  index : number = -1;

  constructor(private actRoute: ActivatedRoute,
    public activiteService: ActiviteService,
    private monRouteur: Router
  ){
    this.index = Number(
      this.actRoute.snapshot.paramMap.get('idAct') ?? -1
    );
  }

  supprimeElem(index: number) {
  this.activiteService.removeItem(index);
  this.monRouteur.navigate(['/']);
  }

  modifier() {
  this.titreSaisi = this.activiteService.objectifs[this.index] ?? '';
  this.edition = true;
  }

sauvegarder() {
  const titre = this.titreSaisi.trim();

  if (titre === '') {
    return;
  }

  this.activiteService.updateItem(this.index, titre);
  this.edition = false;
  } 



}
