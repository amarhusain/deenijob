import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportFooterAreaComponent } from './support-footer-area.component';

describe('SupportFooterAreaComponent', () => {
  let component: SupportFooterAreaComponent;
  let fixture: ComponentFixture<SupportFooterAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportFooterAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupportFooterAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
