import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookstatuscardComponent } from './bookstatuscard.component';

describe('BookstatuscardComponent', () => {
  let component: BookstatuscardComponent;
  let fixture: ComponentFixture<BookstatuscardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookstatuscardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookstatuscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
