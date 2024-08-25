import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { BatalhaService } from '../../services/batalha.service';
import { Treinador } from '../../model/treinador';

@Component({
  selector: 'app-campanha',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterModule],
  templateUrl: './campanha.component.html',
  styleUrl: './campanha.component.css'
})
export class CampanhaComponent implements OnInit{
  dialogoDiv:boolean = false;
  proximoOponente!:Treinador;
  caminhoImagemOponente:string = '';

  constructor(private usuarioService:UsuarioService, private batalhaService:BatalhaService){}

  ngOnInit(): void {
    const numeroBatalhaAtual = this.usuarioService.usuario.batalhaAtual; 
      this.proximoOponente = this.batalhaService.batalhar(numeroBatalhaAtual);
      const caminhoBaseImagem = 'assets/images/personagens/';
      this.caminhoImagemOponente = caminhoBaseImagem+this.proximoOponente.imagem;
  }

}
