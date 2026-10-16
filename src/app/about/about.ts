import { Component } from '@angular/core';
import {Router } from '@angular/router'
import { ActiviteService } from '../services/activite';

@Component({
  imports: [],
  selector: 'app-about',
  styleUrl: './about.scss',
  templateUrl: './about.html',
})
export class About {
  name: string = "Kylian Mbappé";

  constructor(
  private monRouteur: Router,
  public activiteService: ActiviteService
  ) {
  }
}
