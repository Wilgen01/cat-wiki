import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Catapi, CatBreed } from '../models/CatApi.model';

@Injectable({
  providedIn: 'root'
})
export class CatServiceService {

  private  breedurl : string = 'https://api.thecatapi.com/v1/breeds';
  private title !: CatBreed[]  

  constructor(private http : HttpClient) { 
     
  }

  getBreeds(){
    return this.http.get<[Catapi]>(this.breedurl)
  }
   


}
