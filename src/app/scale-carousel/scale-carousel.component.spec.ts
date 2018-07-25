import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleCarouselComponent } from './scale-carousel.component';

describe('ScaleCarouselComponent', () => {
  let component: ScaleCarouselComponent;
  let fixture: ComponentFixture<ScaleCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaleCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
