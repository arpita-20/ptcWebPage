import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdtopComponent } from './thirdtop.component';

describe('ThirdtopComponent', () => {
  let component: ThirdtopComponent;
  let fixture: ComponentFixture<ThirdtopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdtopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdtopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
