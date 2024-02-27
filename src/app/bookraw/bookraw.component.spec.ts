import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookrawComponent } from './bookraw.component';

describe('BookrawComponent', () => {
  let component: BookrawComponent;
  let fixture: ComponentFixture<BookrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookrawComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
