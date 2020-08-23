import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-form',
  templateUrl: './ng-for-form.component.html',
  styleUrls: ['./ng-for-form.component.css']
})
export class NgForFormComponent implements OnInit {

  name: string = '';
  address: string = '';
  phone: string = '';
  city: string = '';
  age: number = 0;

  cities = [
    { name: 'Uberlândia', state: 'MG' },
    { name: 'São Paulo', state: 'SP' },
    { name: 'Porto Alegre', state: 'RS' },
    { name: 'Curitiba', state: 'PR' },
    { name: 'Rio de Janeiro', state: 'RJ' },
  ]

  clients = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngSave() {
    this.clients.push(
      {
        name: this.name,
        address: this.address,
        phone: this.phone,
        city: this.city,
        age: this.age,
      }
    );
    this.ngCancel()
    console.log(this.clients)
  }

  ngCancel() {
    this.name = '';
    this.address = '';
    this.phone = '';
    this.city = '';
    this.age = 0;
  };

  ngDeleteClient(i: number){
    this.clients.splice(i, 1);
  }

}
