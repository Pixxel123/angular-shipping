/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Unserialised_products } from '../models/unserialised-_products';
@Injectable({
  providedIn: 'root',
})
class UnserialisedProductsService extends __BaseService {
  static readonly getUnserialisedProductsPath = '/unserialised_products';
  static readonly postUnserialisedProductsPath = '/unserialised_products';
  static readonly deleteUnserialisedProductsPath = '/unserialised_products';
  static readonly patchUnserialisedProductsPath = '/unserialised_products';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `UnserialisedProductsService.GetUnserialisedProductsParams` containing the following parameters:
   *
   * - `select`: Filtering Columns
   *
   * - `product_id`:
   *
   * - `order`: Ordering
   *
   * - `offset`: Limiting and Pagination
   *
   * - `limit`: Limiting and Pagination
   *
   * - `id`:
   *
   * - `delivery_id`:
   *
   * - `Range-Unit`: Limiting and Pagination
   *
   * - `Range`: Limiting and Pagination
   *
   * - `Prefer`: Preference
   *
   * @return OK
   */
  getUnserialisedProductsResponse(params: UnserialisedProductsService.GetUnserialisedProductsParams): __Observable<__StrictHttpResponse<Array<Unserialised_products>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.select != null) __params = __params.set('select', params.select.toString());
    if (params.productId != null) __params = __params.set('product_id', params.productId.toString());
    if (params.order != null) __params = __params.set('order', params.order.toString());
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.id != null) __params = __params.set('id', params.id.toString());
    if (params.deliveryId != null) __params = __params.set('delivery_id', params.deliveryId.toString());
    if (params.RangeUnit != null) __headers = __headers.set('Range-Unit', params.RangeUnit.toString());
    if (params.Range != null) __headers = __headers.set('Range', params.Range.toString());
    if (params.Prefer != null) __headers = __headers.set('Prefer', params.Prefer.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/unserialised_products`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Unserialised_products>>;
      })
    );
  }
  /**
   * @param params The `UnserialisedProductsService.GetUnserialisedProductsParams` containing the following parameters:
   *
   * - `select`: Filtering Columns
   *
   * - `product_id`:
   *
   * - `order`: Ordering
   *
   * - `offset`: Limiting and Pagination
   *
   * - `limit`: Limiting and Pagination
   *
   * - `id`:
   *
   * - `delivery_id`:
   *
   * - `Range-Unit`: Limiting and Pagination
   *
   * - `Range`: Limiting and Pagination
   *
   * - `Prefer`: Preference
   *
   * @return OK
   */
  getUnserialisedProducts(params: UnserialisedProductsService.GetUnserialisedProductsParams): __Observable<Array<Unserialised_products>> {
    return this.getUnserialisedProductsResponse(params).pipe(
      __map(_r => _r.body as Array<Unserialised_products>)
    );
  }

  /**
   * @param params The `UnserialisedProductsService.PostUnserialisedProductsParams` containing the following parameters:
   *
   * - `unserialised_products`: unserialised_products
   *
   * - `select`: Filtering Columns
   *
   * - `Prefer`: Preference
   */
  postUnserialisedProductsResponse(params: UnserialisedProductsService.PostUnserialisedProductsParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.unserialisedProducts;
    if (params.select != null) __params = __params.set('select', params.select.toString());
    if (params.Prefer != null) __headers = __headers.set('Prefer', params.Prefer.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/unserialised_products`,
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
   * @param params The `UnserialisedProductsService.PostUnserialisedProductsParams` containing the following parameters:
   *
   * - `unserialised_products`: unserialised_products
   *
   * - `select`: Filtering Columns
   *
   * - `Prefer`: Preference
   */
  postUnserialisedProducts(params: UnserialisedProductsService.PostUnserialisedProductsParams): __Observable<null> {
    return this.postUnserialisedProductsResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `UnserialisedProductsService.DeleteUnserialisedProductsParams` containing the following parameters:
   *
   * - `product_id`:
   *
   * - `id`:
   *
   * - `delivery_id`:
   *
   * - `Prefer`: Preference
   */
  deleteUnserialisedProductsResponse(params: UnserialisedProductsService.DeleteUnserialisedProductsParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.productId != null) __params = __params.set('product_id', params.productId.toString());
    if (params.id != null) __params = __params.set('id', params.id.toString());
    if (params.deliveryId != null) __params = __params.set('delivery_id', params.deliveryId.toString());
    if (params.Prefer != null) __headers = __headers.set('Prefer', params.Prefer.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/unserialised_products`,
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
   * @param params The `UnserialisedProductsService.DeleteUnserialisedProductsParams` containing the following parameters:
   *
   * - `product_id`:
   *
   * - `id`:
   *
   * - `delivery_id`:
   *
   * - `Prefer`: Preference
   */
  deleteUnserialisedProducts(params: UnserialisedProductsService.DeleteUnserialisedProductsParams): __Observable<null> {
    return this.deleteUnserialisedProductsResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `UnserialisedProductsService.PatchUnserialisedProductsParams` containing the following parameters:
   *
   * - `unserialised_products`: unserialised_products
   *
   * - `product_id`:
   *
   * - `id`:
   *
   * - `delivery_id`:
   *
   * - `Prefer`: Preference
   */
  patchUnserialisedProductsResponse(params: UnserialisedProductsService.PatchUnserialisedProductsParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.unserialisedProducts;
    if (params.productId != null) __params = __params.set('product_id', params.productId.toString());
    if (params.id != null) __params = __params.set('id', params.id.toString());
    if (params.deliveryId != null) __params = __params.set('delivery_id', params.deliveryId.toString());
    if (params.Prefer != null) __headers = __headers.set('Prefer', params.Prefer.toString());
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/unserialised_products`,
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
   * @param params The `UnserialisedProductsService.PatchUnserialisedProductsParams` containing the following parameters:
   *
   * - `unserialised_products`: unserialised_products
   *
   * - `product_id`:
   *
   * - `id`:
   *
   * - `delivery_id`:
   *
   * - `Prefer`: Preference
   */
  patchUnserialisedProducts(params: UnserialisedProductsService.PatchUnserialisedProductsParams): __Observable<null> {
    return this.patchUnserialisedProductsResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module UnserialisedProductsService {

  /**
   * Parameters for getUnserialisedProducts
   */
  export interface GetUnserialisedProductsParams {

    /**
     * Filtering Columns
     */
    select?: string;
    productId?: string;

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
    deliveryId?: string;

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
   * Parameters for postUnserialisedProducts
   */
  export interface PostUnserialisedProductsParams {

    /**
     * unserialised_products
     */
    unserialisedProducts?: Unserialised_products;

    /**
     * Filtering Columns
     */
    select?: string;

    /**
     * Preference
     */
    Prefer?: 'return=representation' | 'return=minimal' | 'return=none';
  }

  /**
   * Parameters for deleteUnserialisedProducts
   */
  export interface DeleteUnserialisedProductsParams {
    productId?: string;
    id?: string;
    deliveryId?: string;

    /**
     * Preference
     */
    Prefer?: 'return=representation' | 'return=minimal' | 'return=none';
  }

  /**
   * Parameters for patchUnserialisedProducts
   */
  export interface PatchUnserialisedProductsParams {

    /**
     * unserialised_products
     */
    unserialisedProducts?: Unserialised_products;
    productId?: string;
    id?: string;
    deliveryId?: string;

    /**
     * Preference
     */
    Prefer?: 'return=representation' | 'return=minimal' | 'return=none';
  }
}

export { UnserialisedProductsService }
