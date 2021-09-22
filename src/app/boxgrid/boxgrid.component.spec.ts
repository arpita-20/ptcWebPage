import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxgridComponent } from './boxgrid.component';

describe('BoxgridComponent', () => {
  let component: BoxgridComponent;
  let fixture: ComponentFixture<BoxgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxgridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
