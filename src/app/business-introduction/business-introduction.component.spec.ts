import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessIntroductionComponent } from './business-introduction.component';

describe('BusinessIntroductionComponent', () => {
  let component: BusinessIntroductionComponent;
  let fixture: ComponentFixture<BusinessIntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessIntroductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
