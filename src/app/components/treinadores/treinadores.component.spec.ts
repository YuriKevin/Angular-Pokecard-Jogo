import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinadoresComponent } from './treinadores.component';

describe('TreinadoresComponent', () => {
  let component: TreinadoresComponent;
  let fixture: ComponentFixture<TreinadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreinadoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreinadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
