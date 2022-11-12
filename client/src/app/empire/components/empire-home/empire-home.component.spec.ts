import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpireHomeComponent } from './empire-home.component';

describe('EmpireHomeComponent', () => {
  let component: EmpireHomeComponent;
  let fixture: ComponentFixture<EmpireHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpireHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpireHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
