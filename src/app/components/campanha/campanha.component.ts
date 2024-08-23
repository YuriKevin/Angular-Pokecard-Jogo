import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-campanha',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './campanha.component.html',
  styleUrl: './campanha.component.css'
})
export class CampanhaComponent {
  dialogoDiv:boolean = false;
}
