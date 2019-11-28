import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  private cliente: Cliente = new Cliente();
  private titulo: string = 'Criar cliente'

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit() {
  }


  public create(): void{
    this.clienteService.store(this.cliente).subscribe(
      response => {
        this.router.navigate(['/clientes'])
        swal.fire('Novo Cliente', `Cliente ${this.cliente.nome} criado com exito`, "success")
      }
    )
  }

}
