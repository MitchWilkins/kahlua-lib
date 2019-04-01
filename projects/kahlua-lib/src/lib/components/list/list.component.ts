import { Component, Input, OnInit } from '@angular/core';
import { ItemInterface } from '../../interfaces/item.interface';

@Component({
  selector: 'kh-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() public items: ItemInterface[] = [];
  constructor() { }

  ngOnInit() {
  }

}
