import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcComponent } from './forc.component';

describe('ForcComponent', () => {
  let component: ForcComponent;
  let fixture: ComponentFixture<ForcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
