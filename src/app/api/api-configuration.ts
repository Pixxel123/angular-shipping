/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for Api services
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = 'http://0.0.0.0:5000';
}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}
