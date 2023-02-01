/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { IntrospectionService } from './services/introspection.service';
import { UnserialisedProductsService } from './services/unserialised-products.service';
import { ProductsService } from './services/products.service';
import { SerialisedProductsService } from './services/serialised-products.service';
import { CustomersService } from './services/customers.service';
import { DeliveryService } from './services/delivery.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    IntrospectionService,
    UnserialisedProductsService,
    ProductsService,
    SerialisedProductsService,
    CustomersService,
    DeliveryService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
