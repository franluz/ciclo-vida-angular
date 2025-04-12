import { ListaDeCompraService } from './service/lista-de-compra.service';
import { Component, DoCheck, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'app-lista-de-compras';
  listaDeCompra!: Array<Item>
  itemParaSerEditado!: Item;
  constructor(private listaDeCompraService: ListaDeCompraService) { }
  ngOnInit(): void {
    this.listaDeCompra = this.listaDeCompraService.getListaDeCompra();
    console.log(this.listaDeCompra)
  }
  editarItem(item: Item) {
    this.itemParaSerEditado = item;
  }
  ngDoCheck(): void {
    console.log('Docheck foi chamado')
    this.listaDeCompraService.atualizarLocalStorage();
  }
}
