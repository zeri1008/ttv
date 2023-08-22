import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

 num: number;
 isCheck: boolean;

  constructor() { 
    this.num = 0;
    this.isCheck = false;
  }

  ngOnInit(): void {

    
  }  
}
