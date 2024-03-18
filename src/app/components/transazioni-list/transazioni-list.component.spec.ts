import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransazioniListComponent } from './transazioni-list.component';

describe('TransazioniListComponent', () => {
  let component: TransazioniListComponent;
  let fixture: ComponentFixture<TransazioniListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransazioniListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransazioniListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
