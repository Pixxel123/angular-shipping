/* tslint:disable */
export interface Unserialised_products {

  /**
   * Note:
   * This is a Foreign Key to `delivery.id`.<fk table='delivery' column='id'/>
   */
  delivery_id: number;

  /**
   * Note:
   * This is a Primary Key.<pk/>
   */
  id: number;

  /**
   * Note:
   * This is a Foreign Key to `products.id`.<fk table='products' column='id'/>
   */
  product_id: number;
}
