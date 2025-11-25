import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPrivacyPolicy } from './footer-privacy-policy';

describe('FooterPrivacyPolicy', () => {
  let component: FooterPrivacyPolicy;
  let fixture: ComponentFixture<FooterPrivacyPolicy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterPrivacyPolicy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterPrivacyPolicy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
