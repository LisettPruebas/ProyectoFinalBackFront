import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaPregunta } from './carta-pregunta';

describe('CartaPregunta', () => {
  let component: CartaPregunta;
  let fixture: ComponentFixture<CartaPregunta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartaPregunta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaPregunta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
