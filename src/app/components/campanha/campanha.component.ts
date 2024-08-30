import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Router, RouterModule } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { BatalhaService } from '../../services/batalha.service';
import { Treinador } from '../../model/treinador';
import { DialogoComponent } from '../dialogo/dialogo.component';

@Component({
  selector: 'app-campanha',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterModule, DialogoComponent],
  templateUrl: './campanha.component.html',
  styleUrl: './campanha.component.css'
})
export class CampanhaComponent implements OnInit{
  proximoOponente!:Treinador;
  caminhoImagemOponente:string = '';
  mensagem:string='';
  jogarBotao!:boolean;
  incompletoBotao!:boolean;
  numeroBatalha!:number;
  imagemDialogo!:string;

  constructor(private usuarioService:UsuarioService, private batalhaService:BatalhaService, private router:Router){}

  ngOnInit(): void {
    if(!this.usuarioService.usuario){
      this.router.navigate(['/cadastro']);
    }
    this.usuarioService.salvarUsuario();
    const numeroBatalhaAtual = this.usuarioService.usuario.batalhaAtual; 
    if(numeroBatalhaAtual>20 && this.usuarioService.usuario.campeaoLigaAmadora==false){
      this.router.navigate(['/liga-amadora']);
    }
    else if(numeroBatalhaAtual>30 && this.usuarioService.usuario.campeaoLigaMundial==false){
      this.router.navigate(['/liga-mundial']);
    }
     else if(numeroBatalhaAtual>31 && this.usuarioService.usuario.derrotouGiovanni==false){
      this.router.navigate(['/final']);
    }
    this.numeroBatalha = numeroBatalhaAtual;
    this.proximoOponente = this.batalhaService.batalhar(numeroBatalhaAtual);
    const caminhoBaseImagem = 'assets/images/personagens/';
    this.caminhoImagemOponente = caminhoBaseImagem+this.proximoOponente.imagem;
    if(this.usuarioService.getTamanhoDeck()>19){
      this.jogarBotao = true;
    }
    else{
      this.incompletoBotao = true;
    }
    this.imagemDialogo = caminhoBaseImagem;
  }
}
