import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router, RouterModule } from '@angular/router';
import { CardService } from '../../services/card.service';
import { Card } from '../../model/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-liga-amadora',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './liga-amadora.component.html',
  styleUrl: './liga-amadora.component.css'
})
export class LigaAmadoraComponent implements OnInit{
  caminhoImagem:string ='assets/images/cards/';
  cards:Card[] = [];
  trofeuDiv:boolean = true;
  index:number = 0;

  constructor(private usuarioService:UsuarioService, private router:Router, private cardService:CardService){

  }

  ngOnInit(): void {
      if(this.usuarioService.usuario.campeaoLigaAmadora==true || this.usuarioService.usuario.batalhaAtual<=20){
        this.router.navigate(['/campanha']);
        return;
      } 
      
      this.cards.push(this.cardService.novaCarta('Difícil'));
      this.cards.push(this.cardService.novaCarta('Difícil'));
      this.cards.push(this.cardService.novaCarta('Difícil'));
      this.cards.push(this.cardService.novaCarta('Difícil'));
      this.cards.push(this.cardService.novaCarta('Difícil'));
      this.cards.push(this.cardService.novaCarta('Difícil'));
      this.cards.push(this.cardService.novaCarta('Difícil'));
      this.cards.push(this.cardService.novaCarta('Difícil'));
      this.cards.push(this.cardService.novaCarta('Difícil'));
      this.cards.push(this.cardService.novaCarta('Difícil'));
      
      this.usuarioService.usuario.campeaoLigaAmadora = true;
      this.usuarioService.salvarUsuario();
  }

  fecharTrofeu(){
    this.trofeuDiv = false;
  }


}
