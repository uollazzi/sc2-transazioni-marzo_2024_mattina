import { Component } from '@angular/core';
import { Transazione } from '../../models/transazione';
import { TRANSAZIONI } from '../../data/transazioni';

@Component({
  selector: 'app-transazioni-list',
  templateUrl: './transazioni-list.component.html',
  styleUrl: './transazioni-list.component.css'
})
export class TransazioniListComponent {
  transazioni: Transazione[] = TRANSAZIONI;

  eliminaTransazione(t: Transazione) {
    const i = this.transazioni.indexOf(t);

    if (i > -1) {
      this.transazioni.splice(i, 1);
    }
  }
}
