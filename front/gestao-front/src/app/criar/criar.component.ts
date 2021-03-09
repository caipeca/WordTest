import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilizador } from '../class/utilizador';
import { UtilizadorService } from '../service/utilizador.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css']
})
export class CriarComponent implements OnInit {

  
  utilizador: Utilizador = new Utilizador();
  constructor(private utilizadorService: UtilizadorService,
              private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  salvarUtilizador(){
    this.utilizadorService.criarUtilizador(this.utilizador).subscribe(data=>{
      console.log(data);
      
    },
    error=> console.log(error));
  }

  goToUtilizadorLista(){
    this.router.navigate(['/utilizadores']);
  }

  onSubmit(f){
    console.log(this.utilizador);
    this.salvarUtilizador();
    this.notificar();
    f.form.reset();
  }
  onVoltar(){
    this.goToUtilizadorLista();
  }

  verificar(campo){
    return !campo.valid && campo.touched;
  }

  notificar(){
    this.toastr.success('Salvo com sucesso', 'Salvo');
  }

}
