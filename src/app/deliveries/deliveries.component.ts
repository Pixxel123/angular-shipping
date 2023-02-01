import { Component, OnInit } from '@angular/core';
import { Delivery } from '../api/models';
import { DeliveryService } from '../api/services';

@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.component.html',
  styleUrls: ['./deliveries.component.css']
})
export class DeliveriesComponent implements OnInit {
  delivery!: Delivery[];
  constructor(private deliveryService: DeliveryService) {}
  
  ngOnInit(): void {
    this.getDeliveries();
  }

  getDeliveries(): void {
    this.deliveryService
    .getDelivery({order: "id.desc"})
    .subscribe(xs => {
      this.delivery = this.delivery = xs;
    });
  }
}

