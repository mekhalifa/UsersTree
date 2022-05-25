import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'list-user-widget-tree',
  templateUrl: './list-user-widget-tree.component.html',
  styleUrls: ['./list-user-widget-tree.component.scss'],
})
export class ListUserWidgetTreeComponent implements OnInit, OnChanges {
  @Input() UserList: User[];
  UserRoot: User;
  NumOfLevels = 0;
  Levels: number[];

  constructor() {
    this.UserRoot =new User;
    this.UserList = [];
    this.Levels = [];
  }

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.FillTree();
  }

  private GetChildren(user: User): User {
    // console.log(user.code?.split('.')?.length as number)
    let children = this.UserList?.filter(
      (m) =>
        m.code != user.code &&
        (m.code?.split('.')?.length as number) ==
          (user.code?.split('.')?.length as number) + 1 &&
        m.code?.includes(user.code as string)
    );

    if (children == null || children == undefined) return user;


    children.forEach((element) => {
      this.GetChildren(element);
    });

    user.children = children;
    return user;
  }

  public FillTree() {
    this.UserRoot = this.UserList?.find(
      (m) => m.code?.split('.')?.length == 1
    ) as User;
    console.log('Root : ' + JSON.stringify(this.GetChildren(this.UserRoot)));
    this.UserRoot?.children?.push();

    this.UserList?.forEach((m) => {
      if ((m.code?.split('.')?.length as number) > this.NumOfLevels)
        this.NumOfLevels = m.code?.split('.')?.length as number;
    });

    for (let index = 1; index <= this.NumOfLevels; index++) {
      this.Levels.push(index);
    }

  }
}
