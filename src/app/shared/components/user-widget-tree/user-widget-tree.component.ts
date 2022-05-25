import { User } from './../../models/user';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'user-widget-tree',
  templateUrl: './user-widget-tree.component.html',
  styleUrls: ['./user-widget-tree.component.scss'],
  animations:[     trigger('childAnimation', [
      // ...
      state('open', style({
        opacity: 1,
        color: '#2E0249'
      })),
      state('closed', style({
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('* => *', [
        animate('1.5s')
      ]),
    ]),
]
})
export class UserWidgetTreeComponent implements OnInit ,OnChanges{

  @Input() UserData :User;
  imagePath?='assets/img/default-user-img.png';
  childrenCol=0;

  constructor() {
    this.UserData = new User ;
    console.log(this.UserData.imagePath)
  }

  ngOnInit(): void {

    if(this.UserData?.imagePath!=undefined ||this.UserData?.imagePath!=null ){
      this.imagePath=this.UserData?.imagePath
    }


  }

  ngOnChanges(changes: SimpleChanges): void {
    this.childrenCol = (12/(this.UserData?.children?.length as number))
  }
}
