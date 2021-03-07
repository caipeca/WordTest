import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilizador } from '../class/utilizador';
import { UtilizadorService } from '../service/utilizador.service';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css']
})
export class CriarComponent implements OnInit {

  utilizador: Utilizador = new Utilizador();
  constructor(private utilizadorService: UtilizadorService,
              private router: Router) { }

  ngOnInit(): void {
  }

  salvarUtilizador(){
    this.utilizadorService.criarUtilizador(this.utilizador).subscribe(data=>{
      console.log(data);
      this.goToUtilizadorLista();
    },
    error=> console.log(error));
  }

  goToUtilizadorLista(){
    this.router.navigate(['/utilizadores']);
  }

  onSubmit(){
    console.log(this.utilizador);
    this.salvarUtilizador();
  }

}
