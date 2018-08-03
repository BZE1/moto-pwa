// import { Injectable } from '@angular/core';
// // import {Widget} from '../models/widget.models.client'
// import { map } from "rxjs/operators";
// import { Http, Response } from '@angular/http';
// import { environment } from '../../environments/environment'

// // injecting Services into modules
// @Injectable()



// /*		########################################################
// 		#############[    Youtube Service   Class  ]############
// 		########################################################*/
// export class YoutubeService {

// 	baseUrl = environment.baseUrl;

// 	key = "6c8dafa5dd3c1e8a136f3fb7b42488f3";  /*[REPLACE]*/
// 	secret = "89d075b312e56b18";			   /*[REPLACE]*/
// 	urlBase = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT";


//     constructor(private http: Http) { }


//      searchVideos(searchTerm: any) {
//     	const url = this.urlBase
//     				.replace ('API_KEY', this.key)
//     				.replace ('TEXT', searchTerm);

//     	return this.http.get(url);
// 	}


// } /*[end class]*/