import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { BatalhaService } from '../../services/batalha.service';
import { Treinador } from '../../model/treinador';
import { DialogoComponent } from '../dialogo/dialogo.component';
import { DialogoService } from '../../services/dialogo.service';

@Component({
  selector: 'app-campanha',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterModule, DialogoComponent],
  templateUrl: './campanha.component.html',
  styleUrl: './campanha.component.css'
})
export class CampanhaComponent implements OnInit, AfterViewInit{
  proximoOponente!:Treinador;
  caminhoImagemOponente:string = '';
  mensagem:string='';
  jogarBotao!:boolean;
  incompletoBotao!:boolean;
  numeroBatalha!:number;
  imagemDialogo!:string;

  constructor(private usuarioService:UsuarioService, private batalhaService:BatalhaService, private dialogoService:DialogoService, private cdRef: ChangeDetectorRef){}

  ngOnInit(): void {
    const numeroBatalhaAtual = this.usuarioService.usuario.batalhaAtual; 
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

  ngAfterViewInit(): void {
      this.imagemDialogo+=this.dialogoService.personagemAtual;
      this.cdRef.detectChanges();
  }

}
