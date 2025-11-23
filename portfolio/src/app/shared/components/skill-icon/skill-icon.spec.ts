import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillIcon } from './skill-icon';

describe('SkillIcon', () => {
  let component: SkillIcon;
  let fixture: ComponentFixture<SkillIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillIcon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
