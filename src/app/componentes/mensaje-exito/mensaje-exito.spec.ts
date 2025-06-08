import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeExito } from './mensaje-exito';

describe('MensajeExito', () => {
  let component: MensajeExito;
  let fixture: ComponentFixture<MensajeExito>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensajeExito]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensajeExito);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
