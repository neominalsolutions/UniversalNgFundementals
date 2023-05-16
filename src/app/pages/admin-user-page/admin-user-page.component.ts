import { Component, OnInit } from '@angular/core';

export interface User {
  id: number;
  name?: string;
  surname?: string;
  username: string;
  email?: string;
}

@Component({
  templateUrl: './admin-user-page.component.html',
  styleUrls: ['./admin-user-page.component.scss'],
})
export class AdminUserPageComponent implements OnInit {
  users: User[] = [
    {
      id: 1,
      name: 'ali',
      surname: 'can',
      username: 'ali.c',
    },
    {
      id: 2,
      name: 'ahmet',
      surname: 'caN',
      username: 'ahmet.c',
    },
    {
      id: 3,
      name: 'mustafa',
      surname: 'şAn',
      username: 'mustafa.c',
    },
  ];

  ngOnInit(): void {
    // this.users.map((item:User) => {
    //   item.
    // });
  }
}
