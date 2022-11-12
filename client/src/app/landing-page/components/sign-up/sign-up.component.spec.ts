import { ComponentFixture, TestBed } from '@angular/core/testing';

import { signUpComponent } from './sign-up.component';

describe('signUpComponent', () => {
  let component: signUpComponent;
  let fixture: ComponentFixture<signUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ signUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(signUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
