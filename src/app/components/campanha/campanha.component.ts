import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-campanha',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterModule],
  templateUrl: './campanha.component.html',
  styleUrl: './campanha.component.css'
})
export class CampanhaComponent {
  dialogoDiv:boolean = false;
}
