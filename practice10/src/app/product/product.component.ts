import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Array<Product> = new Array<Product>();
  constructor() { }

  ngOnInit(): void {
    this.products.push(
      { name:"Telefono Huawei", description:"Telefono de marca huawei fabricado en el oriente de china", price:1000526 },
      { name:"PC", description:"Conjunto de esambles electronicos para la mejor computadora gamer del mercado", price: 1999999 },
      { name:"Chocolatina Jett", description:"Chocolatina de chocolate famosa en colombia muy barata y con muy buen sabor", price:1500 },
      { name:"Telefono Huawei", description:"Telefono de marca huawei fabricado en el oriente de china", price:1000526 },
      { name:"PC", description:"Conjunto de esambles electronicos para la mejor computadora gamer del mercado", price: 1999999 },
      { name:"Chocolatina Jett", description:"Chocolatina de chocolate famosa en colombia muy barata y con muy buen sabor", price:1500 },
      { name:"Telefono Huawei", description:"Telefono de marca huawei fabricado en el oriente de china", price:1000526 },
      { name:"PC", description:"Conjunto de esambles electronicos para la mejor computadora gamer del mercado", price: 1999999 },
      { name:"Chocolatina Jett", description:"Chocolatina de chocolate famosa en colombia muy barata y con muy buen sabor", price:1500 },
      { name:"Telefono Huawei", description:"Telefono de marca huawei fabricado en el oriente de china", price:1000526 },
      { name:"PC", description:"Conjunto de esambles electronicos para la mejor computadora gamer del mercado", price: 1999999 },
      { name:"Chocolatina Jett", description:"Chocolatina de chocolate famosa en colombia muy barata y con muy buen sabor", price:1500 },
      { name:"Telefono Huawei", description:"Telefono de marca huawei fabricado en el oriente de china", price:1000526 },
      { name:"PC", description:"Conjunto de esambles electronicos para la mejor computadora gamer del mercado", price: 1999999 },
      { name:"Chocolatina Jett", description:"Chocolatina de chocolate famosa en colombia muy barata y con muy buen sabor", price:1500 },
      { name:"Telefono Huawei", description:"Telefono de marca huawei fabricado en el oriente de china", price:1000526 },
      { name:"PC", description:"Conjunto de esambles electronicos para la mejor computadora gamer del mercado", price: 1999999 },
      { name:"Chocolatina Jett", description:"Chocolatina de chocolate famosa en colombia muy barata y con muy buen sabor", price:1500 },
      { name:"Telefono Huawei", description:"Telefono de marca huawei fabricado en el oriente de china", price:1000526 },
      { name:"PC", description:"Conjunto de esambles electronicos para la mejor computadora gamer del mercado", price: 1999999 },
      { name:"Chocolatina Jett", description:"Chocolatina de chocolate famosa en colombia muy barata y con muy buen sabor", price:1500 },
      { name:"Telefono Huawei", description:"Telefono de marca huawei fabricado en el oriente de china", price:1000526 },
      { name:"PC", description:"Conjunto de esambles electronicos para la mejor computadora gamer del mercado", price: 1999999 },
      { name:"Chocolatina Jett", description:"Chocolatina de chocolate famosa en colombia muy barata y con muy buen sabor", price:1500 },
      { name:"Telefono Huawei", description:"Telefono de marca huawei fabricado en el oriente de china", price:1000526 },
      { name:"PC", description:"Conjunto de esambles electronicos para la mejor computadora gamer del mercado", price: 1999999 },
      { name:"Chocolatina Jett", description:"Chocolatina de chocolate famosa en colombia muy barata y con muy buen sabor", price:1500 },
      { name:"Telefono Huawei", description:"Telefono de marca huawei fabricado en el oriente de china", price:1000526 },
      { name:"PC", description:"Conjunto de esambles electronicos para la mejor computadora gamer del mercado", price: 1999999 },
      { name:"Chocolatina Jett", description:"Chocolatina de chocolate famosa en colombia muy barata y con muy buen sabor", price:1500 },
      { name:"Telefono Huawei", description:"Telefono de marca huawei fabricado en el oriente de china", price:1000526 },
      { name:"PC", description:"Conjunto de esambles electronicos para la mejor computadora gamer del mercado", price: 1999999 },
      { name:"Chocolatina Jett", description:"Chocolatina de chocolate famosa en colombia muy barata y con muy buen sabor", price:1500 },
      { name:"Telefono Huawei", description:"Telefono de marca huawei fabricado en el oriente de china", price:1000526 },
      { name:"PC", description:"Conjunto de esambles electronicos para la mejor computadora gamer del mercado", price: 1999999 },
      { name:"Chocolatina Jett", description:"Chocolatina de chocolate famosa en colombia muy barata y con muy buen sabor", price:1500 },
      { name:"Telefono Huawei", description:"Telefono de marca huawei fabricado en el oriente de china", price:1000526 },
      { name:"PC", description:"Conjunto de esambles electronicos para la mejor computadora gamer del mercado", price: 1999999 },
      { name:"Chocolatina Jett", description:"Chocolatina de chocolate famosa en colombia muy barata y con muy buen sabor", price:1500 },
      { name:"Telefono Huawei", description:"Telefono de marca huawei fabricado en el oriente de china", price:1000526 },
      { name:"PC", description:"Conjunto de esambles electronicos para la mejor computadora gamer del mercado", price: 1999999 },
      { name:"Chocolatina Jett", description:"Chocolatina de chocolate famosa en colombia muy barata y con muy buen sabor", price:1500 },
      { name:"Telefono Huawei", description:"Telefono de marca huawei fabricado en el oriente de china", price:1000526 },
      { name:"PC", description:"Conjunto de esambles electronicos para la mejor computadora gamer del mercado", price: 1999999 },
      { name:"Chocolatina Jett", description:"Chocolatina de chocolate famosa en colombia muy barata y con muy buen sabor", price:1500 },
      { name:"Telefono Huawei", description:"Telefono de marca huawei fabricado en el oriente de china", price:1000526 },
      { name:"PC", description:"Conjunto de esambles electronicos para la mejor computadora gamer del mercado", price: 1999999 },
      { name:"Chocolatina Jett", description:"Chocolatina de chocolate famosa en colombia muy barata y con muy buen sabor", price:1500 },
    )
  }

}
