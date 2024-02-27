import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtradeComponent } from './mtrade.component';

describe('MtradeComponent', () => {
  let component: MtradeComponent;
  let fixture: ComponentFixture<MtradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MtradeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MtradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
