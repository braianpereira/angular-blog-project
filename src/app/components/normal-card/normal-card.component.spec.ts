import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalCardComponent } from './normal-card.component';

describe('NormalCardComponent', () => {
  let component: NormalCardComponent;
  let fixture: ComponentFixture<NormalCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NormalCardComponent]
    });
    fixture = TestBed.createComponent(NormalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
