import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCopyright } from './footer-copyright';

describe('FooterCopyright', () => {
  let component: FooterCopyright;
  let fixture: ComponentFixture<FooterCopyright>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterCopyright]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterCopyright);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
