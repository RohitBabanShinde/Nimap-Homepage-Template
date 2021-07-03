import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimolansFootersComponent } from './testimolans-footers.component';

describe('TestimolansFootersComponent', () => {
  let component: TestimolansFootersComponent;
  let fixture: ComponentFixture<TestimolansFootersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimolansFootersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimolansFootersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
