import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyMe } from './why-me';

describe('WhyMe', () => {
  let component: WhyMe;
  let fixture: ComponentFixture<WhyMe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyMe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyMe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
