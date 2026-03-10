import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-product-main',
  imports: [ RouterOutlet],
  templateUrl: './product-main.html',
  styleUrl: './product-main.css',
})
export class ProductMain {

  constructor(private route: ActivatedRoute, private router: Router){

  }
  showTshirts(){
    this.router.navigate(['tshirts'],{relativeTo:this.route})
  }
  showTrousers(){
    this.router.navigate(['trousers'],{relativeTo:this.route})
  }

}
