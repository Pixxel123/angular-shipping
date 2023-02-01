/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Delivery } from '../models/delivery';
@Injectable({
  providedIn: 'root',
})
class DeliveryService extends __BaseService {
  static readonly getDeliveryPath = '/delivery';
  static readonly postDeliveryPath = '/delivery';
  static readonly deleteDeliveryPath = '/delivery';
  static readonly patchDeliveryPath = '/delivery';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `DeliveryService.GetDeliveryParams` containing the following parameters:
   *
   * - `shipment_location`:
   *
   * - `select`: Filtering Columns
   *
   * - `sales_order`:
   *
   * - `purchase_order`:
   *
   * - `order`: Ordering
   *
   * - `offset`: Limiting and Pagination
   *
   * - `limit`: Limiting and Pagination
   *
   * - `id`:
   *
   * - `date`:
   *
   * - `Range-Unit`: Limiting and Pagination
   *
   * - `Range`: Limiting and Pagination
   *
   * - `Prefer`: Preference
   *
   * @return OK
   */
  getDeliveryResponse(params: DeliveryService.GetDeliveryParams): __Observable<__StrictHttpResponse<Array<Delivery>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.shipmentLocation != null) __params = __params.set('shipment_location', params.shipmentLocation.toString());
    if (params.select != null) __params = __params.set('select', params.select.toString());
    if (params.salesOrder != null) __params = __params.set('sales_order', params.salesOrder.toString());
    if (params.purchaseOrder != null) __params = __params.set('purchase_order', params.purchaseOrder.toString());
    if (params.order != null) __params = __params.set('order', params.order.toString());
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.id != null) __params = __params.set('id', params.id.toString());
    if (params.date != null) __params = __params.set('date', params.date.toString());
    if (params.RangeUnit != null) __headers = __headers.set('Range-Unit', params.RangeUnit.toString());
    if (params.Range != null) __headers = __headers.set('Range', params.Range.toString());
    if (params.Prefer != null) __headers = __headers.set('Prefer', params.Prefer.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/delivery`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Delivery>>;
      })
    );
  }
  /**
   * @param params The `DeliveryService.GetDeliveryParams` containing the following parameters:
   *
   * - `shipment_location`:
   *
   * - `select`: Filtering Columns
   *
   * - `sales_order`:
   *
   * - `purchase_order`:
   *
   * - `order`: Ordering
   *
   * - `offset`: Limiting and Pagination
   *
   * - `limit`: Limiting and Pagination
   *
   * - `id`:
   *
   * - `date`:
   *
   * - `Range-Unit`: Limiting and Pagination
   *
   * - `Range`: Limiting and Pagination
   *
   * - `Prefer`: Preference
   *
   * @return OK
   */
  getDelivery(params: DeliveryService.GetDeliveryParams): __Observable<Array<Delivery>> {
    return this.getDeliveryResponse(params).pipe(
      __map(_r => _r.body as Array<Delivery>)
    );
  }

  /**
   * @param params The `DeliveryService.PostDeliveryParams` containing the following parameters:
   *
   * - `select`: Filtering Columns
   *
   * - `delivery`: delivery
   *
   * - `Prefer`: Preference
   */
  postDeliveryResponse(params: DeliveryService.PostDeliveryParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.select != null) __params = __params.set('select', params.select.toString());
    __body = params.delivery;
    if (params.Prefer != null) __headers = __headers.set('Prefer', params.Prefer.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/delivery`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `DeliveryService.PostDeliveryParams` containing the following parameters:
   *
   * - `select`: Filtering Columns
   *
   * - `delivery`: delivery
   *
   * - `Prefer`: Preference
   */
  postDelivery(params: DeliveryService.PostDeliveryParams): __Observable<null> {
    return this.postDeliveryResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `DeliveryService.DeleteDeliveryParams` containing the following parameters:
   *
   * - `shipment_location`:
   *
   * - `sales_order`:
   *
   * - `purchase_order`:
   *
   * - `id`:
   *
   * - `date`:
   *
   * - `Prefer`: Preference
   */
  deleteDeliveryResponse(params: DeliveryService.DeleteDeliveryParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.shipmentLocation != null) __params = __params.set('shipment_location', params.shipmentLocation.toString());
    if (params.salesOrder != null) __params = __params.set('sales_order', params.salesOrder.toString());
    if (params.purchaseOrder != null) __params = __params.set('purchase_order', params.purchaseOrder.toString());
    if (params.id != null) __params = __params.set('id', params.id.toString());
    if (params.date != null) __params = __params.set('date', params.date.toString());
    if (params.Prefer != null) __headers = __headers.set('Prefer', params.Prefer.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/delivery`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `DeliveryService.DeleteDeliveryParams` containing the following parameters:
   *
   * - `shipment_location`:
   *
   * - `sales_order`:
   *
   * - `purchase_order`:
   *
   * - `id`:
   *
   * - `date`:
   *
   * - `Prefer`: Preference
   */
  deleteDelivery(params: DeliveryService.DeleteDeliveryParams): __Observable<null> {
    return this.deleteDeliveryResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `DeliveryService.PatchDeliveryParams` containing the following parameters:
   *
   * - `shipment_location`:
   *
   * - `sales_order`:
   *
   * - `purchase_order`:
   *
   * - `id`:
   *
   * - `delivery`: delivery
   *
   * - `date`:
   *
   * - `Prefer`: Preference
   */
  patchDeliveryResponse(params: DeliveryService.PatchDeliveryParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.shipmentLocation != null) __params = __params.set('shipment_location', params.shipmentLocation.toString());
    if (params.salesOrder != null) __params = __params.set('sales_order', params.salesOrder.toString());
    if (params.purchaseOrder != null) __params = __params.set('purchase_order', params.purchaseOrder.toString());
    if (params.id != null) __params = __params.set('id', params.id.toString());
    __body = params.delivery;
    if (params.date != null) __params = __params.set('date', params.date.toString());
    if (params.Prefer != null) __headers = __headers.set('Prefer', params.Prefer.toString());
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/delivery`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `DeliveryService.PatchDeliveryParams` containing the following parameters:
   *
   * - `shipment_location`:
   *
   * - `sales_order`:
   *
   * - `purchase_order`:
   *
   * - `id`:
   *
   * - `delivery`: delivery
   *
   * - `date`:
   *
   * - `Prefer`: Preference
   */
  patchDelivery(params: DeliveryService.PatchDeliveryParams): __Observable<null> {
    return this.patchDeliveryResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module DeliveryService {

  /**
   * Parameters for getDelivery
   */
  export interface GetDeliveryParams {
    shipmentLocation?: string;

    /**
     * Filtering Columns
     */
    select?: string;
    salesOrder?: string;
    purchaseOrder?: string;

    /**
     * Ordering
     */
    order?: string;

    /**
     * Limiting and Pagination
     */
    offset?: string;

    /**
     * Limiting and Pagination
     */
    limit?: string;
    id?: string;
    date?: string;

    /**
     * Limiting and Pagination
     */
    RangeUnit?: string;

    /**
     * Limiting and Pagination
     */
    Range?: string;

    /**
     * Preference
     */
    Prefer?: 'count=none';
  }

  /**
   * Parameters for postDelivery
   */
  export interface PostDeliveryParams {

    /**
     * Filtering Columns
     */
    select?: string;

    /**
     * delivery
     */
    delivery?: Delivery;

    /**
     * Preference
     */
    Prefer?: 'return=representation' | 'return=minimal' | 'return=none';
  }

  /**
   * Parameters for deleteDelivery
   */
  export interface DeleteDeliveryParams {
    shipmentLocation?: string;
    salesOrder?: string;
    purchaseOrder?: string;
    id?: string;
    date?: string;

    /**
     * Preference
     */
    Prefer?: 'return=representation' | 'return=minimal' | 'return=none';
  }

  /**
   * Parameters for patchDelivery
   */
  export interface PatchDeliveryParams {
    shipmentLocation?: string;
    salesOrder?: string;
    purchaseOrder?: string;
    id?: string;

    /**
     * delivery
     */
    delivery?: Delivery;
    date?: string;

    /**
     * Preference
     */
    Prefer?: 'return=representation' | 'return=minimal' | 'return=none';
  }
}

export { DeliveryService }
