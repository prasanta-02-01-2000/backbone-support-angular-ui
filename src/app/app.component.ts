import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public sidebarMenu = [
      { 
        title: 'Home', 
        url: '/folder/Home', 
        icon: 'home' 
      },
      { 
        title: 'User', 
        icon: 'person',
        children: [
          { title: 'Add User', url: '/user/add-user', },
          { title: 'View User', url: '/user/view-user', },
        ]
      },
      { 
        title: 'Master', 
        icon: 'list-circle',
        children: [
            { 
              title: 'Uom',  
              subChildren:[
                  { title: 'Add UOM', url: '/master/add-uom', },
                  { title: 'View UOM', url: '/master/view-uom', }
              ]
            },
            { 
              title: 'Item', 
              subChildren:[
                  { title: 'Add Item', url: '/master/add-item', },
                  { title: 'View Item', url: '/master/view-item', }
              ]
            },
            { title: 'Item Group', 
              subChildren:[
                  { title: 'Add Item Group', url: '/master/add-item-group', },
                  { title: 'View Item Group', url: '/master/view-item-group', }
              ]
            },
            { 
              title: 'Vendor',
              subChildren:[
                  { title: 'Add Vendor', url: '/master/add-vendor', },
                  { title: 'View Vendor', url: '/master/view-vendor', }
              ]
            },
            { 
              title: 'Item Sub Group',
              subChildren:[
                  { title: 'Add Item Sub Group', url: '/master/add-item-sub-group',  },
                  { title: 'View Item Sub Group', url: '/master/view-item-sub-group',  }
              ]
            },
            { 
              title: 'Bank',
              subChildren:[
                  { title: 'Add Bank', url: '/master/add-bank',  },
                  { title: 'View Bank', url: '/master/view-bank',  }
              ]
            }
      ] 
    },
  ];
  
  constructor() {}
  ngOnInit() {
  }
  over(event){
    let elem = document.getElementsByClassName(event);
    elem[0].classList.remove('accordion-collapsed');
    elem[0].classList.add('accordion-expanded');
  }
  out(event){
    let elem = document.getElementsByClassName(event);
    elem[0].classList.add('accordion-collapsed');
    elem[0].classList.remove('accordion-expanded');
  }
  getsubMenuList(object){
    let nullArray = [];
    if(object == undefined)
       return nullArray;
    return object;
  }
}
