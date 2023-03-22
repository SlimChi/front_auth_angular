/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AdresseResponse } from '../models/adresse-response';

@Injectable({
  providedIn: 'root',
})
export class AddressService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation updateAdress
   */
  static readonly UpdateAdressPath = '/adresses/update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateAdress()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateAdress$Response(params: {
    id: number;
    rue: string;
    complement: string;
    codePostal: string;
    ville: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, AddressService.UpdateAdressPath, 'put');
    if (params) {
      rb.query('id', params.id, {});
      rb.query('rue', params.rue, {});
      rb.query('complement', params.complement, {});
      rb.query('codePostal', params.codePostal, {});
      rb.query('ville', params.ville, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateAdress$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateAdress(params: {
    id: number;
    rue: string;
    complement: string;
    codePostal: string;
    ville: string;
  },
  context?: HttpContext

): Observable<string> {

    return this.updateAdress$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation findById1
   */
  static readonly FindById1Path = '/adresses/findById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById1$Response(params: {
    'address-id': number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AdresseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AddressService.FindById1Path, 'get');
    if (params) {
      rb.path('address-id', params['address-id'], {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AdresseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById1(params: {
    'address-id': number;
  },
  context?: HttpContext

): Observable<AdresseResponse> {

    return this.findById1$Response(params,context).pipe(
      map((r: StrictHttpResponse<AdresseResponse>) => r.body as AdresseResponse)
    );
  }

  /**
   * Path part for operation findAll1
   */
  static readonly FindAll1Path = '/adresses/findAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll1$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<AdresseResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, AddressService.FindAll1Path, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AdresseResponse>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll1(params?: {
  },
  context?: HttpContext

): Observable<Array<AdresseResponse>> {

    return this.findAll1$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<AdresseResponse>>) => r.body as Array<AdresseResponse>)
    );
  }

  /**
   * Path part for operation delete1
   */
  static readonly Delete1Path = '/adresses/{address-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete1$Response(params: {
    'address-id': number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AddressService.Delete1Path, 'delete');
    if (params) {
      rb.path('address-id', params['address-id'], {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete1(params: {
    'address-id': number;
  },
  context?: HttpContext

): Observable<void> {

    return this.delete1$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
