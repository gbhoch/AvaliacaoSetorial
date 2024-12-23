import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cad-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './cad-usuarios.component.html',
  styleUrl: './cad-usuarios.component.css'
})
export class CadUsuariosComponent {
  cadastro = {
    codOp: '',
    nome: '',
    setor: ''
  }
}
