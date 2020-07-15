import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnhologiesComponent } from './tecnhologies.component';

describe('TecnhologiesComponent', () => {
  let component: TecnhologiesComponent;
  let fixture: ComponentFixture<TecnhologiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecnhologiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnhologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
