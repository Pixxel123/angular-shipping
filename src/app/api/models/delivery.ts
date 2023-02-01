/* tslint:disable */
export interface Delivery {
  date?: string;

  /**
   * Note:
   * This is a Primary Key.<pk/>
   */
  id: number;
  purchase_order?: string;
  sales_order?: string;

  /**
   * Note:
   * This is a Foreign Key to `customers.id`.<fk table='customers' column='id'/>
   */
  shipment_location?: number;
}
