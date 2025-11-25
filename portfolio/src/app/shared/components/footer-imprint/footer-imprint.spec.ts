import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterImprint } from './footer-imprint';

describe('FooterImprint', () => {
  let component: FooterImprint;
  let fixture: ComponentFixture<FooterImprint>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterImprint]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterImprint);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
