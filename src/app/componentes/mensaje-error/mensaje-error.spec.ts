import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeError } from './mensaje-error';

describe('MensajeError', () => {
  let component: MensajeError;
  let fixture: ComponentFixture<MensajeError>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensajeError]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensajeError);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
