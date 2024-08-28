import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigaMundialComponent } from './liga-mundial.component';

describe('LigaMundialComponent', () => {
  let component: LigaMundialComponent;
  let fixture: ComponentFixture<LigaMundialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LigaMundialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LigaMundialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
