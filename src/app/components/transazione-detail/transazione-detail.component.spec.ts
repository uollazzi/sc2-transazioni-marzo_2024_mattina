import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransazioneDetailComponent } from './transazione-detail.component';

describe('TransazioneDetailComponent', () => {
  let component: TransazioneDetailComponent;
  let fixture: ComponentFixture<TransazioneDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransazioneDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransazioneDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
