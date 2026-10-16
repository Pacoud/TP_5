import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ActiviteService } from '../services/activite';

@Component({
  imports: [],
  selector: 'app-consult-act',
  styleUrl: './consult-act.scss',
  templateUrl: './consult-act.html',
})
export class ConsultAct {
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



}
