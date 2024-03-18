import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Transazione } from '../../models/transazione';

@Component({
  selector: 'app-transazione-detail',
  templateUrl: './transazione-detail.component.html',
  styleUrl: './transazione-detail.component.css'
})
export class TransazioneDetailComponent {
  @Input()
  transazione?: Transazione;

  @Output()
  onRichiestaEliminazione = new EventEmitter<Transazione>();

  // onRichiestaEliminazione = output<Transazione>();

  elimina() {
    this.onRichiestaEliminazione.emit(this.transazione);
  }
}
