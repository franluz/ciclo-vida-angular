import { ListaDeCompraService } from './../../service/lista-de-compra.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() valorItem!: string;
  constructor(private listaDeCompraService: ListaDeCompraService) { }

  ngOnInit(): void { }
  adicionarItem(): void {
    this.listaDeCompraService.adicionarItemNaLista(this.valorItem);
    this.limparCampo();
  }
  limparCampo() {
    this.valorItem = '';
  }
}
