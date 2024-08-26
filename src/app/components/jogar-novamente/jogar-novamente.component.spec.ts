import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogarNovamenteComponent } from './jogar-novamente.component';

describe('JogarNovamenteComponent', () => {
  let component: JogarNovamenteComponent;
  let fixture: ComponentFixture<JogarNovamenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JogarNovamenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JogarNovamenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
