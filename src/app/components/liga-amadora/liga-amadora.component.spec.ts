import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigaAmadoraComponent } from './liga-amadora.component';

describe('LigaAmadoraComponent', () => {
  let component: LigaAmadoraComponent;
  let fixture: ComponentFixture<LigaAmadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LigaAmadoraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LigaAmadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
