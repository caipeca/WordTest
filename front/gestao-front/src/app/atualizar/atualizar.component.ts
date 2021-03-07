import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilizador } from '../class/utilizador';
import { UtilizadorService } from '../service/utilizador.service';

@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.component.html',
  styleUrls: ['./atualizar.component.css']
})
export class AtualizarComponent implements OnInit {

  id:number;
  utilizador: Utilizador = new Utilizador();
  constructor(private utilizadorSerice: UtilizadorService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.utilizadorSerice.getUtilizadorById(this.id).subscribe(data=>{
      this.utilizador = data;
    }, error=>console.log(error));
  }

  onSubmit(){
    this.utilizadorSerice.atualizarUtilizador(this.id, this.utilizador).subscribe(
      data=>{
        this.goToUtilizadorLista();
      }, error => console.log(error));
  }

  goToUtilizadorLista(){
    this.router.navigate(['/utilizadores']);
  }
}
