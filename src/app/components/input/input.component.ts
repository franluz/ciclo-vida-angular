import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from './../../service/lista-de-compra.service';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {
  @Input() itemQueVaiSerEditado!: Item;
  editando = false;
  textoBtn = 'Salvar item'
  valorItem!: string;
  constructor(private listaDeCompraService: ListaDeCompraService) { }

  ngOnInit(): void { }
  adicionarItem(): void {
    this.listaDeCompraService.adicionarItemNaLista(this.valorItem);
    this.limparCampo();
  }
  limparCampo() {
    this.valorItem = '';
  }
  editarItem() {
    this.listaDeCompraService.editarItemDaLista(this.itemQueVaiSerEditado,this.valorItem);
    this.limparCampo();
    this.editando=false;
    this.textoBtn="Salvar Item"
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['itemQueVaiSerEditado'].firstChange) {
      this.editando = true;
      this.textoBtn = 'Editar Item'
      this.valorItem = this.itemQueVaiSerEditado?.nome;
    }
  }
}
