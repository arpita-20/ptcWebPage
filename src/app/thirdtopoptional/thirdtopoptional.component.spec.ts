import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdtopoptionalComponent } from './thirdtopoptional.component';

describe('ThirdtopoptionalComponent', () => {
  let component: ThirdtopoptionalComponent;
  let fixture: ComponentFixture<ThirdtopoptionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdtopoptionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdtopoptionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
