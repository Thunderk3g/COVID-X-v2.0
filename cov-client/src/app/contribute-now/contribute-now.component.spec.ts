import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributeNowComponent } from './contribute-now.component';

describe('ContributeNowComponent', () => {
  let component: ContributeNowComponent;
  let fixture: ComponentFixture<ContributeNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContributeNowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributeNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
