import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdenrolledComponent } from './stdenrolled.component';

describe('StdenrolledComponent', () => {
  let component: StdenrolledComponent;
  let fixture: ComponentFixture<StdenrolledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdenrolledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StdenrolledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
