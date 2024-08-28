import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiovanniComponent } from './giovanni.component';

describe('GiovanniComponent', () => {
  let component: GiovanniComponent;
  let fixture: ComponentFixture<GiovanniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiovanniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiovanniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
