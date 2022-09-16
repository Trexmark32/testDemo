import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getAllFeeds() {
    let obs;
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/xml',
        // Authorization: 'my-auth-token'
        "authority": "feeds.feedburner.com",
      }).set('Accept', 'text/xml'),
    }
    const url = `https://cors-anywhare.herokuapp.com/${environment.exampleUrl}`
    console.log(url)
    obs = this.http.get(url,
      {
        headers: {
          'Accept-Ch': 'Sec-CH-UA-Arch, Sec-CH-UA-Bitness, Sec-CH-UA-Full-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Model, Sec-CH-UA-WoW64, Sec-CH-UA-Platform, Sec-CH-UA-Platform-Version',
          "method": "GET",
          'Access-Control-Allow-Origin': '*',
          'content-type': 'application/xml',
          "authority": "feeds.feedburner.com",
          "Access-Control-Expose-Headers": '*',
        },
        observe: "body",
        responseType: "text"
      }
    );
    console.log("obs", obs)
    return obs;
    // return this.http.get(url, options);
  }
}
