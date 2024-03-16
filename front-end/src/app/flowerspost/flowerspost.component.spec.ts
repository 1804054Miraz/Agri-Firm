import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerspostComponent } from './flowerspost.component';

describe('FlowerspostComponent', () => {
  let component: FlowerspostComponent;
  let fixture: ComponentFixture<FlowerspostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlowerspostComponent]
    });
    fixture = TestBed.createComponent(FlowerspostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
