import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ActiviteService {
    objectifs: string[] = [];

    removeItem(index: number) {
  if (
    Number.isInteger(index) &&
    index >= 0 &&
    index < this.objectifs.length
  ) {
    this.objectifs.splice(index, 1);
  }
}

updateItem(index: number, titre: string) {
  if (
    Number.isInteger(index) &&
    index >= 0 &&
    index < this.objectifs.length
  ) {
    this.objectifs[index] = titre;
  }
}
}