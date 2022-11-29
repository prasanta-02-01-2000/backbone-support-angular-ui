import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss'],
})
export class ViewItemComponent implements OnInit {

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
