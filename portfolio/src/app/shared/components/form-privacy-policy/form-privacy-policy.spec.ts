import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPrivacyPolicy } from './form-privacy-policy';

describe('FormPrivacyPolicy', () => {
  let component: FormPrivacyPolicy;
  let fixture: ComponentFixture<FormPrivacyPolicy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPrivacyPolicy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPrivacyPolicy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
