import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'priceCard';
  cards=[
    {
      planType: "free",
      price: "$0",
      user: "single user",
      storage: "5GB Storage",
      puproject: "Unlimited Public Projects",
      caccess: "Comunity Access",
      prproject: "Unlimited Private Projects",
      prproject1: "false",
      phone: "Dedicated Phone Support",
      phone1:"false",
      domain: "Free Sub-Domain",
      domain1:"false",
      status: "Monthly Status Reports",
      status1:"false"
    },
    {
      planType: "Plus",
      price: "$9",
      user: "5 user",
      storage: "50GB Storage",
      puproject: "Unlimited Public Projects",
      caccess: "Comunity Access",
      prproject: "Unlimited Private Projects",
      prproject1: "true",
      phone: "Dedicated Phone Support",
      phone1:"true",
      domain: "Free Sub-Domain",
      domain1:"true",
      status: "Monthly Status Reports",
      status1:"false"
        },
    {
      planType: "Pro",
      price: "$49",
      user: "Unlimited user",
      storage: "150GB Storage",
      puproject: "Unlimited Public Projects",
      caccess: "Comunity Access",
      prproject: "Unlimited Private Projects",
      prproject1: "true",
      phone: "Dedicated Phone Support",
      phone1:"true",
      domain: "Free Sub-Domain",
      domain1:"true",
      status: "Monthly Status Reports",
      status1:"true"
    }
  ]
  constructor(){
    this.cards.forEach((i)=>{})
  }
}
