import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../model/usuario';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { UsuarioService } from '../../services/usuario.service';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, CommonModule, HeaderComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  nome:string=''
  usuario!:Usuario;

  constructor(private router:Router, private usuarioService:UsuarioService, private cardService:CardService){

  }

  cadastrar(){
    localStorage.removeItem('usuario');
      this.usuario = {
        nome: this.nome,
        cards: [],
        deck: this.cardService.deckInicial(),
        imagem: 'shadow.png',            
        batalhaAtual: 1,
        campeaoLigaAmadora: false,
        campeaoLigaMundial: false,
        derrotouGiovanni:false
      };
      this.usuarioService.usuario = this.usuario;
      localStorage.setItem('usuario', JSON.stringify(this.usuario));
      this.router.navigate(['/campanha']);
     }
}
