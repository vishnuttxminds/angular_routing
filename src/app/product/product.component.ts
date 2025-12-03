import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  productId: string | null = null;

  category: string | null = '';
  page: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');

    console.log('this.productId :', this.productId);

    this.route.queryParamMap.subscribe((params) => {
      this.category = params.get('category');
      this.page = params.get('page');

      console.log('this.page :', this.page);

      console.log('this.category :', this.category);
    });


     this.route.paramMap.subscribe(params => {
      this.productId = params.get('id');

        console.log('productId :', this.productId);
    });
  }
}
