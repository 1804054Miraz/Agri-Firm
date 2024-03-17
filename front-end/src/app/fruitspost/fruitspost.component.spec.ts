import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitspostComponent } from './fruitspost.component';

describe('FruitspostComponent', () => {
  let component: FruitspostComponent;
  let fixture: ComponentFixture<FruitspostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FruitspostComponent]
    });
    fixture = TestBed.createComponent(FruitspostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
