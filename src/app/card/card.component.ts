import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input('planType')planType=""
@Input('price')price=""
@Input('user')user=""
@Input('storage')storage=""
@Input('puproject')puproject=""
@Input('caccess')caccess=""
@Input('prproject')prproject=""
@Input('prproject1')prproject1=""
@Input('phone')phone=""
@Input('phone1')phone1=""
@Input('domain')domain=""
@Input('domain1')domain1=""
@Input('status')status=""
@Input('status1')status1=""
  constructor() { }

  ngOnInit(): void {
  }

}
