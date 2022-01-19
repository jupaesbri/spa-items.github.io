import { Component, OnInit } from '@angular/core';
import { ItemsService, Item } from '../../servicios/items.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-items',
  templateUrl: './items.component.html'
})
export class ItemsComponent implements OnInit {

  items: any[] = [];

  constructor(private _itemsService: ItemsService,
              private _router: Router) { }

  ngOnInit() {
    this.items = this._itemsService.getItems();
  }

  public verItem(i:number) {
    //console.log(i);
    this._router.navigate( ['/item',i] );
  }
}
