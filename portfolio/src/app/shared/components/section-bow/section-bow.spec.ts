import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBow } from './section-bow';

describe('SectionBow', () => {
  let component: SectionBow;
  let fixture: ComponentFixture<SectionBow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionBow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionBow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
