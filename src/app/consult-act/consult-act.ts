import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  imports: [],
  selector: 'app-consult-act',
  styleUrl: './consult-act.scss',
  templateUrl: './consult-act.html',
})
export class ConsultAct {
  param = "valDefault"
  param2 = null

  constructor(private actRoute: ActivatedRoute){
    this.param = actRoute.snapshot.params['idAct']
    this.param2 = actRoute.snapshot.params['idSec']


  }



}
