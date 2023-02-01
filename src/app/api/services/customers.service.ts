/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Customers } from '../models/customers';
@Injectable({
  providedIn: 'root',
})
class CustomersService extends __BaseService {
  static readonly getCustomersPath = '/customers';
  static readonly postCustomersPath = '/customers';
  static readonly deleteCustomersPath = '/customers';
  static readonly patchCustomersPath = '/customers';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `CustomersService.GetCustomersParams` containing the following parameters:
   *
   * - `select`: Filtering Columns
   *
   * - `phone`:
   *
   * - `order`: Ordering
   *
   * - `offset`: Limiting and Pagination
   *
   * - `name`:
   *
   * - `limit`: Limiting and Pagination
   *
   * - `id`:
   *
   * - `email`:
   *
   * - `address`:
   *
   * - `Range-Unit`: Limiting and Pagination
   *
   * - `Range`: Limiting and Pagination
   *
   * - `Prefer`: Preference
   *
   * @return OK
   */
  getCustomersResponse(params: CustomersService.GetCustomersParams): __Observable<__StrictHttpResponse<Array<Customers>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.select != null) __params = __params.set('select', params.select.toString());
    if (params.phone != null) __params = __params.set('phone', params.phone.toString());
    if (params.order != null) __params = __params.set('order', params.order.toString());
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.name != null) __params = __params.set('name', params.name.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.id != null) __params = __params.set('id', params.id.toString());
    if (params.email != null) __params = __params.set('email', params.email.toString());
    if (params.address != null) __params = __params.set('address', params.address.toString());
    if (params.RangeUnit != null) __headers = __headers.set('Range-Unit', params.RangeUnit.toString());
    if (params.Range != null) __headers = __headers.set('Range', params.Range.toString());
    if (params.Prefer != null) __headers = __headers.set('Prefer', params.Prefer.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/customers`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Customers>>;
      })
    );
  }
  /**
   * @param params The `CustomersService.GetCustomersParams` containing the following parameters:
   *
   * - `select`: Filtering Columns
   *
   * - `phone`:
   *
   * - `order`: Ordering
   *
   * - `offset`: Limiting and Pagination
   *
   * - `name`:
   *
   * - `limit`: Limiting and Pagination
   *
   * - `id`:
   *
   * - `email`:
   *
   * - `address`:
   *
   * - `Range-Unit`: Limiting and Pagination
   *
   * - `Range`: Limiting and Pagination
   *
   * - `Prefer`: Preference
   *
   * @return OK
   */
  getCustomers(params: CustomersService.GetCustomersParams): __Observable<Array<Customers>> {
    return this.getCustomersResponse(params).pipe(
      __map(_r => _r.body as Array<Customers>)
    );
  }

  /**
   * @param params The `CustomersService.PostCustomersParams` containing the following parameters:
   *
   * - `select`: Filtering Columns
   *
   * - `customers`: customers
   *
   * - `Prefer`: Preference
   */
  postCustomersResponse(params: CustomersService.PostCustomersParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.select != null) __params = __params.set('select', params.select.toString());
    __body = params.customers;
    if (params.Prefer != null) __headers = __headers.set('Prefer', params.Prefer.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/customers`,
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
   * @param params The `CustomersService.PostCustomersParams` containing the following parameters:
   *
   * - `select`: Filtering Columns
   *
   * - `customers`: customers
   *
   * - `Prefer`: Preference
   */
  postCustomers(params: CustomersService.PostCustomersParams): __Observable<null> {
    return this.postCustomersResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CustomersService.DeleteCustomersParams` containing the following parameters:
   *
   * - `phone`:
   *
   * - `name`:
   *
   * - `id`:
   *
   * - `email`:
   *
   * - `address`:
   *
   * - `Prefer`: Preference
   */
  deleteCustomersResponse(params: CustomersService.DeleteCustomersParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.phone != null) __params = __params.set('phone', params.phone.toString());
    if (params.name != null) __params = __params.set('name', params.name.toString());
    if (params.id != null) __params = __params.set('id', params.id.toString());
    if (params.email != null) __params = __params.set('email', params.email.toString());
    if (params.address != null) __params = __params.set('address', params.address.toString());
    if (params.Prefer != null) __headers = __headers.set('Prefer', params.Prefer.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/customers`,
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
   * @param params The `CustomersService.DeleteCustomersParams` containing the following parameters:
   *
   * - `phone`:
   *
   * - `name`:
   *
   * - `id`:
   *
   * - `email`:
   *
   * - `address`:
   *
   * - `Prefer`: Preference
   */
  deleteCustomers(params: CustomersService.DeleteCustomersParams): __Observable<null> {
    return this.deleteCustomersResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CustomersService.PatchCustomersParams` containing the following parameters:
   *
   * - `phone`:
   *
   * - `name`:
   *
   * - `id`:
   *
   * - `email`:
   *
   * - `customers`: customers
   *
   * - `address`:
   *
   * - `Prefer`: Preference
   */
  patchCustomersResponse(params: CustomersService.PatchCustomersParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.phone != null) __params = __params.set('phone', params.phone.toString());
    if (params.name != null) __params = __params.set('name', params.name.toString());
    if (params.id != null) __params = __params.set('id', params.id.toString());
    if (params.email != null) __params = __params.set('email', params.email.toString());
    __body = params.customers;
    if (params.address != null) __params = __params.set('address', params.address.toString());
    if (params.Prefer != null) __headers = __headers.set('Prefer', params.Prefer.toString());
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/customers`,
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
   * @param params The `CustomersService.PatchCustomersParams` containing the following parameters:
   *
   * - `phone`:
   *
   * - `name`:
   *
   * - `id`:
   *
   * - `email`:
   *
   * - `customers`: customers
   *
   * - `address`:
   *
   * - `Prefer`: Preference
   */
  patchCustomers(params: CustomersService.PatchCustomersParams): __Observable<null> {
    return this.patchCustomersResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module CustomersService {

  /**
   * Parameters for getCustomers
   */
  export interface GetCustomersParams {

    /**
     * Filtering Columns
     */
    select?: string;
    phone?: string;

    /**
     * Ordering
     */
    order?: string;

    /**
     * Limiting and Pagination
     */
    offset?: string;
    name?: string;

    /**
     * Limiting and Pagination
     */
    limit?: string;
    id?: string;
    email?: string;
    address?: string;

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
   * Parameters for postCustomers
   */
  export interface PostCustomersParams {

    /**
     * Filtering Columns
     */
    select?: string;

    /**
     * customers
     */
    customers?: Customers;

    /**
     * Preference
     */
    Prefer?: 'return=representation' | 'return=minimal' | 'return=none';
  }

  /**
   * Parameters for deleteCustomers
   */
  export interface DeleteCustomersParams {
    phone?: string;
    name?: string;
    id?: string;
    email?: string;
    address?: string;

    /**
     * Preference
     */
    Prefer?: 'return=representation' | 'return=minimal' | 'return=none';
  }

  /**
   * Parameters for patchCustomers
   */
  export interface PatchCustomersParams {
    phone?: string;
    name?: string;
    id?: string;
    email?: string;

    /**
     * customers
     */
    customers?: Customers;
    address?: string;

    /**
     * Preference
     */
    Prefer?: 'return=representation' | 'return=minimal' | 'return=none';
  }
}

export { CustomersService }
