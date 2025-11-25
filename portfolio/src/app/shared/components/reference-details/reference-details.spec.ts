import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceDetails } from './reference-details';

describe('ReferenceDetails', () => {
  let component: ReferenceDetails;
  let fixture: ComponentFixture<ReferenceDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferenceDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferenceDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
