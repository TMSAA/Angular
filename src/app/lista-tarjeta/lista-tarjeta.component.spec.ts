import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTarjetaComponent } from './lista-tarjeta.component';

describe('ListaTarjetaComponent', () => {
  let component: ListaTarjetaComponent;
  let fixture: ComponentFixture<ListaTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTarjetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
