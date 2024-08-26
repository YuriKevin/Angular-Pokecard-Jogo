import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guia',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './guia.component.html',
  styleUrl: './guia.component.css'
})
export class GuiaComponent {
  elementosDiv:boolean = false;
  regrasDiv:boolean = true;

  regras(){
    this.elementosDiv = false;
    this.regrasDiv = true;
  }
  elementos(){
    this.elementosDiv = true;
    this.regrasDiv = false;
  }

}
