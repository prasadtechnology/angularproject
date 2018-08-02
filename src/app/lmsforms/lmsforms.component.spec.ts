import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsformsComponent } from './lmsforms.component';

describe('LmsformsComponent', () => {
  let component: LmsformsComponent;
  let fixture: ComponentFixture<LmsformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmsformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmsformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
