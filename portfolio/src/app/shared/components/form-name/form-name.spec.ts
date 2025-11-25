import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormName } from './form-name';

describe('FormName', () => {
  let component: FormName;
  let fixture: ComponentFixture<FormName>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormName]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormName);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
