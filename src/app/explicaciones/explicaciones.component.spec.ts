import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplicacionesComponent } from './explicaciones.component';

describe('ExplicacionesComponent', () => {
  let component: ExplicacionesComponent;
  let fixture: ComponentFixture<ExplicacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplicacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
