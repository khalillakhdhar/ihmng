import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructurelComponent } from './structurel.component';

describe('StructurelComponent', () => {
  let component: StructurelComponent;
  let fixture: ComponentFixture<StructurelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StructurelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructurelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
