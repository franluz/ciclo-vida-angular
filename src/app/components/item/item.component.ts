import { ListaDeCompraService } from './../../service/lista-de-compra.service';
import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges {
  @Input() item!: Item
  @Output() emitindoItemParaEditar = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash

  constructor(private listaDeCompraService: ListaDeCompraService) { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Change')
  }
  editarItem() {
    this.emitindoItemParaEditar.emit(this.item);
  }
  trocaValor() {
    const itemEditado: Item = {
      id: this.item.id,
      nome: this.item.nome,
      data: this.item.data,
      comprado: !this.item.comprado
    }
    this.listaDeCompraService.alterarSituacaoComprado(itemEditado);
    this.listaDeCompraService.atualizarLocalStorage();

  }

}
