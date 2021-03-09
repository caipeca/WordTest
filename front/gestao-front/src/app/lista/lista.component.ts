import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilizador } from '../class/utilizador';
import { UtilizadorService } from '../service/utilizador.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  utilizadors: Utilizador[];
  constructor(private utilizadorService: UtilizadorService,
              private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getUtilizador();
  }

  private getUtilizador(){
    this.utilizadorService.getListaUtlizadores().subscribe(data=> this.utilizadors = data);
  }

  atualizarUtilizador(id: number){
    this.router.navigate(['atualizar', id]);
  }

  goToUtilizador(){
    this.router.navigate(['/criar']);
  }

  apagarUtilizador(id:number){
    this.utilizadorService.apagarUtilizador(id).subscribe(data=>{
      console.log(data);
      this.getUtilizador();
    })
    this.notificar();
  }

    notificar(){
      this.toastr.success('Removido com sucesso', 'Removido');
    }
}
