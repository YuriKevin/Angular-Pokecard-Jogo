import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DialogoComponent } from '../dialogo/dialogo.component';
import { Router, RouterModule } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-giovanni',
  standalone: true,
  imports: [CommonModule, DialogoComponent, RouterModule],
  templateUrl: './giovanni.component.html',
  styleUrl: './giovanni.component.css'
})
export class GiovanniComponent implements OnInit{
  todosDiv:boolean = false;
  dialogoDiv:boolean = false;
  voltarDiv:boolean = false;

  constructor(private usuarioService:UsuarioService, private router:Router, private cardService:CardService){}

  ngOnInit(): void {
    if(this.usuarioService.usuario.batalhaAtual<32){
      this.router.navigate(['/campanha']);  
      return;
    }
      setTimeout(()=>{
        this.todosDiv = true;
        setTimeout(()=>{
          this.dialogoDiv = true;
          setTimeout(()=>{
            this.voltarDiv = true;
            this.usuarioService.usuario.derrotouGiovanni = true;
            this.usuarioService.usuario.cards = this.cardService.cards;
            localStorage.setItem('usuario', JSON.stringify(this.usuarioService.usuario));
          }, 1000)
        }, 5000)
      }, 10000)
  }

}
