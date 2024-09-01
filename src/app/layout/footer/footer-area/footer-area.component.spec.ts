import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAreaComponent } from './footer-area.component';

describe('FooterAreaComponent', () => {
  let component: FooterAreaComponent;
  let fixture: ComponentFixture<FooterAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
