import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BayongComponent } from './bayong.component';

describe('BayongComponent', () => {
  let component: BayongComponent;
  let fixture: ComponentFixture<BayongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BayongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BayongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
