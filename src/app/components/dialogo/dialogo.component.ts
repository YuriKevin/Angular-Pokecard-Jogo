import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { DialogoService } from '../../services/dialogo.service';

@Component({
  selector: 'app-dialogo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialogo.component.html',
  styleUrl: './dialogo.component.css'
})
export class DialogoComponent implements OnInit{
  @Input() numeroBatalha!:number;
  @Input() imagemDialogo!:string;
  @Input() dialogoCampanha!:boolean;
  dialogo: string[] = [];
  mensagem:string = '';
  index:number = 0;
  mostrarDiv:boolean = true;

  constructor(private dialogoService:DialogoService){}

  ngOnInit(): void {
    if(this.dialogoCampanha){
      this.dialogo = this.dialogoService.retornarDialogoCampanha(this.numeroBatalha);
    }
    else{
      this.dialogo = this.dialogoService.retornarDialogoBatalha(this.numeroBatalha);
    }
    if(this.dialogo.length>0){
      this.mensagem = this.dialogo[this.index];
      const caminhoBaseImagem = 'assets/images/personagens/';
      this.imagemDialogo = caminhoBaseImagem + this.imagemDialogo;
    }
    else{
      this.mostrarDiv = false;
    }
  }

  proximaMensagem(){
    if(this.dialogo.length > this.index+1){
      this.index++;
      this.mensagem = this.dialogo[this.index];
    }
    else{
      this.mostrarDiv = false;
    }
  }
}
