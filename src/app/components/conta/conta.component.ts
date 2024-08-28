import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conta',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './conta.component.html',
  styleUrl: './conta.component.css'
})
export class ContaComponent implements OnInit{
  nome:string = '';

  constructor(private usuarioService:UsuarioService, private router:Router){

  }

  ngOnInit(): void {
      this.nome = this.usuarioService.usuario.nome;
  }

  alterar(){
    if(this.nome.length>0){
      this.usuarioService.usuario.nome = this.nome;
      localStorage.setItem('usuario', JSON.stringify(this.usuarioService.usuario));
      this.router.navigate(['/campanha'])

    }
  }

}
