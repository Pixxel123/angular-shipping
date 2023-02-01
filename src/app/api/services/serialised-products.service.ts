/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Serialised_products } from '../models/serialised-_products';
@Injectable({
  providedIn: 'root',
})
class SerialisedProductsService extends __BaseService {
  static readonly getSerialisedProductsPath = '/serialised_products';
  static readonly postSerialisedProductsPath = '/serialised_products';
  static readonly deleteSerialisedProductsPath = '/serialised_products';
  static readonly patchSerialisedProductsPath = '/serialised_products';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `SerialisedProductsService.GetSerialisedProductsParams` containing the following parameters:
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
  getSerialisedProductsResponse(params: SerialisedProductsService.GetSerialisedProductsParams): __Observable<__StrictHttpResponse<Array<Serialised_products>>> {
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
      this.rootUrl + `/serialised_products`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Serialised_products>>;
      })
    );
  }
  /**
   * @param params The `SerialisedProductsService.GetSerialisedProductsParams` containing the following parameters:
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
  getSerialisedProducts(params: SerialisedProductsService.GetSerialisedProductsParams): __Observable<Array<Serialised_products>> {
    return this.getSerialisedProductsResponse(params).pipe(
      __map(_r => _r.body as Array<Serialised_products>)
    );
  }

  /**
   * @param params The `SerialisedProductsService.PostSerialisedProductsParams` containing the following parameters:
   *
   * - `serialised_products`: serialised_products
   *
   * - `select`: Filtering Columns
   *
   * - `Prefer`: Preference
   */
  postSerialisedProductsResponse(params: SerialisedProductsService.PostSerialisedProductsParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.serialisedProducts;
    if (params.select != null) __params = __params.set('select', params.select.toString());
    if (params.Prefer != null) __headers = __headers.set('Prefer', params.Prefer.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/serialised_products`,
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
   * @param params The `SerialisedProductsService.PostSerialisedProductsParams` containing the following parameters:
   *
   * - `serialised_products`: serialised_products
   *
   * - `select`: Filtering Columns
   *
   * - `Prefer`: Preference
   */
  postSerialisedProducts(params: SerialisedProductsService.PostSerialisedProductsParams): __Observable<null> {
    return this.postSerialisedProductsResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `SerialisedProductsService.DeleteSerialisedProductsParams` containing the following parameters:
   *
   * - `product_id`:
   *
   * - `id`:
   *
   * - `delivery_id`:
   *
   * - `Prefer`: Preference
   */
  deleteSerialisedProductsResponse(params: SerialisedProductsService.DeleteSerialisedProductsParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.productId != null) __params = __params.set('product_id', params.productId.toString());
    if (params.id != null) __params = __params.set('id', params.id.toString());
    if (params.deliveryId != null) __params = __params.set('delivery_id', params.deliveryId.toString());
    if (params.Prefer != null) __headers = __headers.set('Prefer', params.Prefer.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/serialised_products`,
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
   * @param params The `SerialisedProductsService.DeleteSerialisedProductsParams` containing the following parameters:
   *
   * - `product_id`:
   *
   * - `id`:
   *
   * - `delivery_id`:
   *
   * - `Prefer`: Preference
   */
  deleteSerialisedProducts(params: SerialisedProductsService.DeleteSerialisedProductsParams): __Observable<null> {
    return this.deleteSerialisedProductsResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `SerialisedProductsService.PatchSerialisedProductsParams` containing the following parameters:
   *
   * - `serialised_products`: serialised_products
   *
   * - `product_id`:
   *
   * - `id`:
   *
   * - `delivery_id`:
   *
   * - `Prefer`: Preference
   */
  patchSerialisedProductsResponse(params: SerialisedProductsService.PatchSerialisedProductsParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.serialisedProducts;
    if (params.productId != null) __params = __params.set('product_id', params.productId.toString());
    if (params.id != null) __params = __params.set('id', params.id.toString());
    if (params.deliveryId != null) __params = __params.set('delivery_id', params.deliveryId.toString());
    if (params.Prefer != null) __headers = __headers.set('Prefer', params.Prefer.toString());
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/serialised_products`,
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
   * @param params The `SerialisedProductsService.PatchSerialisedProductsParams` containing the following parameters:
   *
   * - `serialised_products`: serialised_products
   *
   * - `product_id`:
   *
   * - `id`:
   *
   * - `delivery_id`:
   *
   * - `Prefer`: Preference
   */
  patchSerialisedProducts(params: SerialisedProductsService.PatchSerialisedProductsParams): __Observable<null> {
    return this.patchSerialisedProductsResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module SerialisedProductsService {

  /**
   * Parameters for getSerialisedProducts
   */
  export interface GetSerialisedProductsParams {

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
   * Parameters for postSerialisedProducts
   */
  export interface PostSerialisedProductsParams {

    /**
     * serialised_products
     */
    serialisedProducts?: Serialised_products;

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
   * Parameters for deleteSerialisedProducts
   */
  export interface DeleteSerialisedProductsParams {
    productId?: string;
    id?: string;
    deliveryId?: string;

    /**
     * Preference
     */
    Prefer?: 'return=representation' | 'return=minimal' | 'return=none';
  }

  /**
   * Parameters for patchSerialisedProducts
   */
  export interface PatchSerialisedProductsParams {

    /**
     * serialised_products
     */
    serialisedProducts?: Serialised_products;
    productId?: string;
    id?: string;
    deliveryId?: string;

    /**
     * Preference
     */
    Prefer?: 'return=representation' | 'return=minimal' | 'return=none';
  }
}

export { SerialisedProductsService }
