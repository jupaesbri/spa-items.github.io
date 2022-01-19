import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item, ItemsService } from '../../servicios/items.service';



@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {

  item: any = {};

  constructor(private _activatedRoute: ActivatedRoute,
    private _itemsService: ItemsService) { 
    this._activatedRoute.params.subscribe(params => {
      console.log(params.id);
      this.item = this._itemsService.getItem(params['id']);
      console.log(this.item);
    });
  }

  ngOnInit(): void {
  }
  

}
