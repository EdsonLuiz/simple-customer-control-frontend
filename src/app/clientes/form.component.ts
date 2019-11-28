import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  private cliente: Cliente = new Cliente();
  private titulo: string = 'Criar cliente'

  constructor(private clienteService: ClienteService,
    private activateRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.carregarCliente()
  }

  carregarCliente(): void {
    this.activateRoute.params.subscribe( params => {
      let id = params['id']
      if(id) {
        this.clienteService.index(id).subscribe( cliente => this.cliente = cliente)
      }
    })
  }

  public create(): void{
    this.clienteService.store(this.cliente).subscribe(
      response => {
        this.router.navigate(['/clientes'])
        swal.fire('Novo Cliente', `Cliente ${this.cliente.nome} criado com exito`, "success")
      }
    )
  }

  update(): void {
    this.clienteService.update(this.cliente)
      .subscribe(
        cliente => {
          this.router.navigate(['/clientes'])
          swal.fire('Cliente atualizado', `Cliente ${this.cliente.nome} atualizado com exito`, "success")
        }
      )
  }

}
