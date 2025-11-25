import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidationBox } from './form-validation-box';

describe('FormValidationBox', () => {
  let component: FormValidationBox;
  let fixture: ComponentFixture<FormValidationBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormValidationBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormValidationBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
