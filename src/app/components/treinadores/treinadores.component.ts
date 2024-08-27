import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { BatalhaService } from '../../services/batalha.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-treinadores',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './treinadores.component.html',
  styleUrl: './treinadores.component.css'
})
export class TreinadoresComponent implements OnInit{
  mostrarDivSelecionada:boolean = false;
  mensagemDivSelecionada:string = '';
  caminhoBase:string = 'assets/images/personagens/';
  skins: { [numeroBatalha: number]: string } = {
    1: 'shadow.png',
    5: 'brock.png',
    6: 'misty.png',
    7: 'blaine.png',
    8: 'erica.png',
    9: 'falkner.png',
    10: 'sabrina.png',
    11: 'surge.png',
    12: 'jasmine.png',
    13: 'agatha.png',
    14: 'jessie.png',
    15: 'james.png',
    16: 'chuck.png',
    17: 'dawn.png',
    18: 'serena.png',
    19: 'kiawe.png',
    20: 'gary.png',
    21: 'jessiejames.png',
    100: 'ash.png'
  };
  possui:string[] = [];
  naoPossui:string[] = []

  constructor(private usuarioService:UsuarioService, private batalhaService:BatalhaService, private router:Router){}

  ngOnInit(): void {
    for (const [numeroBatalha, imagemDoArray] of Object.entries(this.skins)) {
      const numeroSelecionado = parseInt(numeroBatalha, 10);
        if(this.usuarioService.usuario.batalhaAtual>numeroSelecionado){
          this.possui.push(imagemDoArray);
        }
        else{
          this.naoPossui.push(imagemDoArray);
        }
    }
  }

  selecionarSkin(imagemSelecionada:string){
    if(this.possui.includes(imagemSelecionada)){
      this.usuarioService.usuario.imagem = imagemSelecionada;
      this.mensagemDivSelecionada = 'Skin selecionada';
      this.mostrarDivSelecionada = true;
      setTimeout(()=> {
        this.mostrarDivSelecionada = false;
      }, 2000)
      return;
    }
    else{
      this.mensagemDivSelecionada = 'Para utilizar esta skin primeiro você deve vencer este treinador.';
      this.mostrarDivSelecionada = true;
      setTimeout(()=> {
        this.mostrarDivSelecionada = false;
      }, 2000)
      return;
    }
  }

  jogar(imagem:string){
    for (const [numeroBatalha, imagemDoArray] of Object.entries(this.skins)) {
      if(imagem == imagemDoArray){
        const numeroSelecionado = parseInt(numeroBatalha, 10);
        this.batalhaService.batalhar(numeroSelecionado);
        this.batalhaService.batalhaRepetida = numeroSelecionado;
        this.router.navigate(['/duelo']);
        return;
      }
    }
  }
}
