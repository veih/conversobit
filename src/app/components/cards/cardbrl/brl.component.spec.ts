import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrlComponent } from './brl.component';

describe('BrlComponent', () => {
  let component: BrlComponent;
  let fixture: ComponentFixture<BrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
