import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuneJuegosComponent } from './mune-juegos.component';

describe('MuneJuegosComponent', () => {
  let component: MuneJuegosComponent;
  let fixture: ComponentFixture<MuneJuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuneJuegosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuneJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
