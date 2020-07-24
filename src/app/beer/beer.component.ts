import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  currentStore: String;
  currentProduct: String;
  currentBrand: String;
  favBrand: number;
  favAvailable: boolean;

  public stores: Array<Object> = [
    { name: 'Harris Teeter', src: '../../assets/harris-teeter.png' },
    { name: 'Trader Joes', src: '../../assets/trader-joes.png' },
    { name: 'Lowes Foods', src: '../../assets/lowes.jpg' },
    { name: 'Costco', src: '../../assets/costco.png' },
  ];
  public products: Array<Object> = [
    { name: 'Bread', src: '../../assets/bread.jpg' },
    { name: 'Cheese', src: '../../assets/soda.png' },
    { name: 'Beer', src: '../../assets/beer.jpg' },
    { name: 'Soda', src: '../../assets/cheese.jpg' },
  ];

  public beers: Array<Object> = [
    { priority: 1, name: 'Voodoo Ranger Imperial IPA 12 pack cans', src: '../../assets/vr-12-c.png' },
    { priority: 2, name: 'Voodoo Ranger Imperial IPA 12 pack bottles', src: '../../assets/vr-12-b.png' },
    { priority: 3, name: 'Voodoo Ranger Imperial IPA 6 pack bottles', src: '../../assets/vr-6-b.png' }
  ];

  constructor() { }

  ngOnInit() {
  }

  chooseStore(storeName)
  {
    this.currentStore = storeName;
  }

  chooseProduct(productName)
  {
    this.currentProduct = productName;
    this.favBrand = 0;
    console.log(this.favBrand);
  }

  chooseBrand(brandName)
  {
    this.currentBrand = brandName;
  }

  nextFavorite(favBrand)
  {
    this.favBrand = favBrand + 1;
    console.log(this.favBrand);
  }

  makeDecision(f)
  {
    this.favAvailable = true;
  }


}
