import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondtopComponent } from './secondtop.component';

describe('SecondtopComponent', () => {
  let component: SecondtopComponent;
  let fixture: ComponentFixture<SecondtopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondtopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondtopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
