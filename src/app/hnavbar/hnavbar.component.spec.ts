import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HnavbarComponent } from './hnavbar.component';

describe('HnavbarComponent', () => {
  let component: HnavbarComponent;
  let fixture: ComponentFixture<HnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HnavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
