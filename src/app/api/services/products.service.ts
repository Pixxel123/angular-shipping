/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Products } from '../models/products';
@Injectable({
  providedIn: 'root',
})
class ProductsService extends __BaseService {
  static readonly getProductsPath = '/products';
  static readonly postProductsPath = '/products';
  static readonly deleteProductsPath = '/products';
  static readonly patchProductsPath = '/products';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `ProductsService.GetProductsParams` containing the following parameters:
   *
   * - `select`: Filtering Columns
   *
   * - `product_description`:
   *
   * - `product_code`:
   *
   * - `order`: Ordering
   *
   * - `offset`: Limiting and Pagination
   *
   * - `limit`: Limiting and Pagination
   *
   * - `id`:
   *
   * - `Range-Unit`: Limiting and Pagination
   *
   * - `Range`: Limiting and Pagination
   *
   * - `Prefer`: Preference
   *
   * @return OK
   */
  getProductsResponse(params: ProductsService.GetProductsParams): __Observable<__StrictHttpResponse<Array<Products>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.select != null) __params = __params.set('select', params.select.toString());
    if (params.productDescription != null) __params = __params.set('product_description', params.productDescription.toString());
    if (params.productCode != null) __params = __params.set('product_code', params.productCode.toString());
    if (params.order != null) __params = __params.set('order', params.order.toString());
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.id != null) __params = __params.set('id', params.id.toString());
    if (params.RangeUnit != null) __headers = __headers.set('Range-Unit', params.RangeUnit.toString());
    if (params.Range != null) __headers = __headers.set('Range', params.Range.toString());
    if (params.Prefer != null) __headers = __headers.set('Prefer', params.Prefer.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/products`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Products>>;
      })
    );
  }
  /**
   * @param params The `ProductsService.GetProductsParams` containing the following parameters:
   *
   * - `select`: Filtering Columns
   *
   * - `product_description`:
   *
   * - `product_code`:
   *
   * - `order`: Ordering
   *
   * - `offset`: Limiting and Pagination
   *
   * - `limit`: Limiting and Pagination
   *
   * - `id`:
   *
   * - `Range-Unit`: Limiting and Pagination
   *
   * - `Range`: Limiting and Pagination
   *
   * - `Prefer`: Preference
   *
   * @return OK
   */
  getProducts(params: ProductsService.GetProductsParams): __Observable<Array<Products>> {
    return this.getProductsResponse(params).pipe(
      __map(_r => _r.body as Array<Products>)
    );
  }

  /**
   * @param params The `ProductsService.PostProductsParams` containing the following parameters:
   *
   * - `select`: Filtering Columns
   *
   * - `products`: products
   *
   * - `Prefer`: Preference
   */
  postProductsResponse(params: ProductsService.PostProductsParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.select != null) __params = __params.set('select', params.select.toString());
    __body = params.products;
    if (params.Prefer != null) __headers = __headers.set('Prefer', params.Prefer.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/products`,
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
   * @param params The `ProductsService.PostProductsParams` containing the following parameters:
   *
   * - `select`: Filtering Columns
   *
   * - `products`: products
   *
   * - `Prefer`: Preference
   */
  postProducts(params: ProductsService.PostProductsParams): __Observable<null> {
    return this.postProductsResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `ProductsService.DeleteProductsParams` containing the following parameters:
   *
   * - `product_description`:
   *
   * - `product_code`:
   *
   * - `id`:
   *
   * - `Prefer`: Preference
   */
  deleteProductsResponse(params: ProductsService.DeleteProductsParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.productDescription != null) __params = __params.set('product_description', params.productDescription.toString());
    if (params.productCode != null) __params = __params.set('product_code', params.productCode.toString());
    if (params.id != null) __params = __params.set('id', params.id.toString());
    if (params.Prefer != null) __headers = __headers.set('Prefer', params.Prefer.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/products`,
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
   * @param params The `ProductsService.DeleteProductsParams` containing the following parameters:
   *
   * - `product_description`:
   *
   * - `product_code`:
   *
   * - `id`:
   *
   * - `Prefer`: Preference
   */
  deleteProducts(params: ProductsService.DeleteProductsParams): __Observable<null> {
    return this.deleteProductsResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `ProductsService.PatchProductsParams` containing the following parameters:
   *
   * - `products`: products
   *
   * - `product_description`:
   *
   * - `product_code`:
   *
   * - `id`:
   *
   * - `Prefer`: Preference
   */
  patchProductsResponse(params: ProductsService.PatchProductsParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.products;
    if (params.productDescription != null) __params = __params.set('product_description', params.productDescription.toString());
    if (params.productCode != null) __params = __params.set('product_code', params.productCode.toString());
    if (params.id != null) __params = __params.set('id', params.id.toString());
    if (params.Prefer != null) __headers = __headers.set('Prefer', params.Prefer.toString());
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/products`,
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
   * @param params The `ProductsService.PatchProductsParams` containing the following parameters:
   *
   * - `products`: products
   *
   * - `product_description`:
   *
   * - `product_code`:
   *
   * - `id`:
   *
   * - `Prefer`: Preference
   */
  patchProducts(params: ProductsService.PatchProductsParams): __Observable<null> {
    return this.patchProductsResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module ProductsService {

  /**
   * Parameters for getProducts
   */
  export interface GetProductsParams {

    /**
     * Filtering Columns
     */
    select?: string;
    productDescription?: string;
    productCode?: string;

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
   * Parameters for postProducts
   */
  export interface PostProductsParams {

    /**
     * Filtering Columns
     */
    select?: string;

    /**
     * products
     */
    products?: Products;

    /**
     * Preference
     */
    Prefer?: 'return=representation' | 'return=minimal' | 'return=none';
  }

  /**
   * Parameters for deleteProducts
   */
  export interface DeleteProductsParams {
    productDescription?: string;
    productCode?: string;
    id?: string;

    /**
     * Preference
     */
    Prefer?: 'return=representation' | 'return=minimal' | 'return=none';
  }

  /**
   * Parameters for patchProducts
   */
  export interface PatchProductsParams {

    /**
     * products
     */
    products?: Products;
    productDescription?: string;
    productCode?: string;
    id?: string;

    /**
     * Preference
     */
    Prefer?: 'return=representation' | 'return=minimal' | 'return=none';
  }
}

export { ProductsService }
