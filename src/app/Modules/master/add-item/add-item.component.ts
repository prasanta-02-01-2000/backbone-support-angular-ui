import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {

  constructor() { }
  public activeItemElement = 'item-section-active';
  public cardItem = 'active';
  public cardItemService = '';
  public cardAnnual = '';

  ngOnInit() {}
  activeItemSection(elem){
    if(elem == 'item-section-active'){
      this.cardItem = 'active';
      this.cardItemService = '';
      this.cardAnnual = '';
    }
    else if(elem == 'service-section-active'){
      this.cardItemService = 'active';
      this.cardAnnual = '';
      this.cardItem = '';
    }
    else if(elem == 'annual-section-active'){
      this.cardAnnual = 'active';
      this.cardItem = '';
      this.cardItemService = '';
    }
    this.activeItemElement = elem;
  }

}
