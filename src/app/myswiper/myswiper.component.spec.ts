import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyswiperComponent } from './myswiper.component';

describe('MyswiperComponent', () => {
  let component: MyswiperComponent;
  let fixture: ComponentFixture<MyswiperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyswiperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyswiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
