import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowApiComponent } from './show-api.component';

describe('ShowApiComponent', () => {
  let component: ShowApiComponent;
  let fixture: ComponentFixture<ShowApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
