import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfcComponent } from './ifc.component';

describe('IfcComponent', () => {
  let component: IfcComponent;
  let fixture: ComponentFixture<IfcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IfcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
