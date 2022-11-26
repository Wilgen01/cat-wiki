import { Component, OnInit } from '@angular/core';
import { Catapi } from '../../../models/CatApi.model';
import { CatServiceService } from '../../../services/cat-service.service';

@Component({
  selector: 'app-most-searched-list',
  templateUrl: './most-searched-list.component.html',
  styleUrls: ['./most-searched-list.component.css']
})
export class MostSearchedListComponent implements OnInit {

  breedsList !: Catapi[]

  constructor(_catService: CatServiceService) { 
    _catService.getBreeds().subscribe(data => {
      this.breedsList = data.slice(0 , 10)
      console.log(this.breedsList);
      
    })
  }

  ngOnInit(): void {
  }

}
