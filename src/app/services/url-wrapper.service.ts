import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlWrapperService {

    /**
 * Return the base api url
 * If ENVIROMENTS have a url we use the configurated url, if not use the window.location.origin
 * @returns {string} the Api Url
 */
getBaseBackApiUrl(): string {
  return this.getUrl(environment.baseBackUrl);
}

getBaseMidleApiUrl(): string {
  return this.getUrl(environment.baseMidleUrl);
}

/**
 * Adds the windows.location.origin if url is not a valid url (starts with http)
 * @param url the initial url
 * @returns {string} the Url
 */
private getUrl(url: string): string {
  if (!url.startsWith('http')) {
    url = `${window.location.origin}/${url}`;
  }
  return url;
}
}
