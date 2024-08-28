import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-liga-mundial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liga-mundial.component.html',
  styleUrl: './liga-mundial.component.css'
})
export class LigaMundialComponent implements OnInit{
  parabensDiv:boolean=false;
  recompensasDiv:boolean=false;
  imagemRecompensa:string = 'assets/images/trofeu.png';
  indexRecompensa:number = 0;
  mostrarImagemRecompensa=true;
  constructor(private usuarioService:UsuarioService, private router:Router, private cardService:CardService){}

  ngOnInit(): void {
    if(this.usuarioService.usuario.batalhaAtual<31){
      this.router.navigate(['/campanha']);  
      return;
    }
    setTimeout(()=>{
      this.parabensDiv = true;
      setTimeout(()=>{
        this.parabensDiv = false;
        this.recompensasDiv = true;
        this.usuarioService.usuario.campeaoLigaMundial = true;
        this.usuarioService.usuario.cards = this.cardService.cards;
      }, 4000)
    }, 3000)
  }


  recompensas(){
    if(this.indexRecompensa>1){
      this.router.navigate(['/campanha'])
    }
    else{
      if(this.indexRecompensa==0){
        this.imagemRecompensa = 'assets/images/personagens/ash.png';
      }
      else{
        this.mostrarImagemRecompensa=false;
      }
    }
    this.indexRecompensa++;
  }
}
