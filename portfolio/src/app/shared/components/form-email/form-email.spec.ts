import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEmail } from './form-email';

describe('FormEmail', () => {
  let component: FormEmail;
  let fixture: ComponentFixture<FormEmail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEmail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEmail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
