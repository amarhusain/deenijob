import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAmirServicesComponent } from './home-amir-services.component';

describe('HomeAmirServicesComponent', () => {
  let component: HomeAmirServicesComponent;
  let fixture: ComponentFixture<HomeAmirServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAmirServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeAmirServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
