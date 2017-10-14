import { Component, OnInit } from '@angular/core';
import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
@Component({
  selector: 'app-user-service',
  templateUrl: './user-service.component.html',
  styleUrls: ['./user-service.component.css']
})
export class UserServiceComponent implements OnInit {
//  user=[
//   {
//     "id": "59257846-caee-454b-bf45-ca636bbfd038",
//     "firstName": "Cullen",
//     "lastName": "Green",
//     "email": "Jayme_Tillman82@hotmail.com",
//     "address": {
//       "street": "56642 Kerluke Lodge",
//       "city": "Bauchtown",
//       "zip": "23284",
//       "state": "WI",
//       "country": "USA"
//     },
//     "dateCreated": "2017-10-13T05:00:14.246Z",
//     "company": {
//       "name": "Windler - Hackett",
//       "website": "https://haley.name"
//     },
//     "profilePic": "http://lorempixel.com/640/480/technics"
//   },
//   {
//     "id": "a7afb8cc-7016-48af-9138-8f80eb8b76aa",
//     "firstName": "Lina",
//     "lastName": "Volkman",
//     "email": "Wilma_Will66@yahoo.com",
//     "address": {
//       "street": "4831 Larson Knoll",
//       "city": "Anabelhaven",
//       "zip": "85724-9972",
//       "state": "MS",
//       "country": "USA"
//     },
//     "dateCreated": "2017-10-13T00:42:22.010Z",
//     "company": {
//       "name": "Ullrich, Howell and Schuster",
//       "website": "http://frederik.name"
//     },
//     "profilePic": "http://lorempixel.com/640/480/cats"
//   },
//   {
//     "id": "8219fea0-204e-458a-acd5-36c76976d67e",
//     "firstName": "Velda",
//     "lastName": "Cummings",
//     "email": "Madisen.Christiansen6@hotmail.com",
//     "address": {
//       "street": "1656 Johnson Shore",
//       "city": "Christopherburgh",
//       "zip": "17761",
//       "state": "OH",
//       "country": "USA"
//     },
//     "dateCreated": "2017-10-13T17:02:11.143Z",
//     "company": {
//       "name": "Hayes - Connelly",
//       "website": "https://maverick.org"
//     },
//     "profilePic": "http://lorempixel.com/640/480/animals"
//   },
//   {
//     "id": "21448784-79e2-4d3e-bb34-397a392eb3ec",
//     "firstName": "Vanessa",
//     "lastName": "Lockman",
//     "email": "Bertha4@gmail.com",
//     "address": {
//       "street": "8001 Raymundo Mews",
//       "city": "South Natasha",
//       "zip": "75193-1716",
//       "state": "RI",
//       "country": "USA"
//     },
//     "dateCreated": "2017-10-13T11:56:33.918Z",
//     "company": {
//       "name": "Hartmann and Sons",
//       "website": "http://darion.biz"
//     },
//     "profilePic": "http://lorempixel.com/640/480/technics"
//   },
//   {
//     "id": "2803ebd2-4782-42d8-81c9-9b5abdd829a0",
//     "firstName": "Markus",
//     "lastName": "Hane",
//     "email": "Myrtie_Christiansen@gmail.com",
//     "address": {
//       "street": "93489 Cummerata Springs",
//       "city": "Jenkinsshire",
//       "zip": "08822-3029",
//       "state": "KY",
//       "country": "USA"
//     },
//     "dateCreated": "2017-10-13T08:50:30.555Z",
//     "company": {
//       "name": "Mills - Moen",
//       "website": "http://jade.biz"
//     },
//     "profilePic": "http://lorempixel.com/640/480/sports"
//   },
//   {
//     "id": "73e7225c-f7f8-4738-a8bf-5fb79098eb37",
//     "firstName": "Matteo",
//     "lastName": "Medhurst",
//     "email": "Mafalda.Schaefer70@gmail.com",
//     "address": {
//       "street": "035 Keegan Flats",
//       "city": "West Rosellaview",
//       "zip": "30648",
//       "state": "UT",
//       "country": "USA"
//     },
//     "dateCreated": "2017-10-13T10:21:22.710Z",
//     "company": {
//       "name": "Swift, Carter and Dickinson",
//       "website": "https://adah.biz"
//     },
//     "profilePic": "http://lorempixel.com/640/480/cats"
//   },
//   {
//     "id": "5b5465bf-6a8b-45fb-bc28-a5634bdce010",
//     "firstName": "Bonita",
//     "lastName": "Hamill",
//     "email": "Elsie.Williamson@hotmail.com",
//     "address": {
//       "street": "2486 Ratke Knolls",
//       "city": "New Houstonberg",
//       "zip": "02674",
//       "state": "AR",
//       "country": "USA"
//     },
//     "dateCreated": "2017-10-13T01:55:53.870Z",
//     "company": {
//       "name": "Simonis - Raynor",
//       "website": "https://darren.info"
//     },
//     "profilePic": "http://lorempixel.com/640/480/sports"
//   },
//   {
//     "id": "4fd46d91-1606-481d-b778-ed1fdf690328",
//     "firstName": "Viviane",
//     "lastName": "Watsica",
//     "email": "Maryjane_Armstrong59@hotmail.com",
//     "address": {
//       "street": "2120 Wolf Lakes",
//       "city": "North Mellie",
//       "zip": "27771-9309",
//       "state": "VT",
//       "country": "USA"
//     },
//     "dateCreated": "2017-10-13T13:09:43.545Z",
//     "company": {
//       "name": "Mitchell and Sons",
//       "website": "https://ansel.name"
//     },
//     "profilePic": "http://lorempixel.com/640/480/technics"
//   },
//   {
//     "id": "effaf222-e8ad-429c-9098-5c0bc25e783b",
//     "firstName": "Dessie",
//     "lastName": "Gutmann",
//     "email": "Geoffrey.Doyle82@hotmail.com",
//     "address": {
//       "street": "221 Harvey Stravenue",
//       "city": "East Gilesborough",
//       "zip": "40142",
//       "state": "NV",
//       "country": "USA"
//     },
//     "dateCreated": "2017-10-13T08:47:57.670Z",
//     "company": {
//       "name": "Ratke and Sons",
//       "website": "http://lavern.org"
//     },
//     "profilePic": "http://lorempixel.com/640/480/fashion"
//   },
//   {
//     "id": "9a5fa442-472a-48f8-a4ee-b0385ec4e3de",
//     "firstName": "Maurice",
//     "lastName": "Ullrich",
//     "email": "Rex.Kassulke@gmail.com",
//     "address": {
//       "street": "5332 Zita Underpass",
//       "city": "Lake Neil",
//       "zip": "41938",
//       "state": "AK",
//       "country": "USA"
//     },
//     "dateCreated": "2017-10-12T23:14:23.840Z",
//     "company": {
//       "name": "Ritchie - Mosciski",
//       "website": "http://kip.info"
//     },
//     "profilePic": "http://lorempixel.com/640/480/fashion"
//   }
//
// ];

 // getUsers(){
 //   return this.user;
 // }
  constructor(private http:Http) { }

  getUsers():Observable<any[]>{
   return this.http.get('http://mocker.egen.io/users')
     .map(response=>response.json())
     .catch(error => Observable.throw(error.statusText));
  }
  ngOnInit() {
  }

  // adduser(user){
  //  this.user.unshift(user);
  // }
 adduser(user):Observable <any[]>{
    return this.http.post('http://mocker.egen.io/users',user)
      .map(response=>response.json())
      .catch(error=> Observable.throw(error.statusText));
 }
}
