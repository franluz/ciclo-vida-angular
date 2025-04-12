import { ListaDeCompraService } from './../../service/lista-de-compra.service';
import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter, OnDestroy } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges,OnDestroy {
  @Input() item!: Item
  @Output() emitindoItemParaEditar = new EventEmitter();
  @Output() emitindoIdParaDeletar = new EventEmitter();
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
    this.item.comprado = !this.item.comprado;

  }
  deletarItem() {
    this.emitindoIdParaDeletar.emit(this.item.id);
    console.log('ESTAO TENTANDO ME CALAR')
   }
   ngOnDestroy(){
    console.log('CONSEGUIRAM ME CALAR');
   }
}
