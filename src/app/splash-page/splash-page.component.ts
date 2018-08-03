import { Component, OnInit } from '@angular/core';
import { Http, Response} from '@angular/http'
import { map } from "rxjs/operators";
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';
// import { Observable } from 'rxjs/Observable'


@Component({
  selector: 'app-splash-page',
  templateUrl: './splash-page.component.html',
  styleUrls: ['./splash-page.component.css']
})
export class SplashPageComponent implements OnInit {

  constructor(private http: Http) { }


	@ViewChild('f') registerForm: NgForm;
	// @ViewChild('b') weatherForm: NgForm;


	  ngOnInit() {

	  	// random news article


	  }

  	// foundVideo = '';
  	output : 		string;
  	output1 : 		any;
  	output2 : 		any;
  	output3 : 		any;
  	inputString : 	string;
  	username: 		string;
  	rawJSON:		any;
  	
  	// description = '';

  		crap = "skljfsdkljfsdlkjfdjkldjklsdgjksdfjklvklsdklfjklsdf"

	clickEvent(){
		// output = this.inputString.value;
		console.log("Space clicked");

		this.inputString = this.registerForm.value.inputString;

		console.log("[1]" + this.inputString);

		this.output = this.inputString;


		this.http.get ('http://api.open-notify.org/astros.json' )
			.subscribe (
				(res:Response) => {

				 const rawJSON = res.json();
				 console.log (rawJSON);
				 this.output1 = rawJSON.people[0].name;
				 this.output2 = rawJSON.people[0].craft;
				 this.output3 = this.crap;
				})
	}



	weather : 		string;
  	weather1 : 		any;
  	weather2 : 		any;
  	weather3 : 		any;
  	inputString2 : 	string;
   	weatherJSON:		any;
	crapyWeather: 	string;
	weather_conditions: string;
  	

  	crapyWeather = "Here comes the rain again";


	GetWeather(){
		// output = this.inputString.value;
		console.log("Weather clicked");

		// this.inputString2 = this.weatherForm.value.inputString2;

		console.log("[1]" + this.inputString2);

		this.weather = this.inputString2;


		this.http.get ('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nashua%2Cnh%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys' )
			.subscribe (
				(res:Response) => {

				 const weatherJSON = res.json();
				 console.log (weatherJSON);
				 this.weather1 = weatherJSON.query.created;
				 this.weather2 = weatherJSON.query.results.channel.description;
				 this.weather3 = this.crapyWeather;
				 this.weather_conditions = weatherJSON.query.results.channel.item.title;
				})
	}

	






} /* END CLASS */




