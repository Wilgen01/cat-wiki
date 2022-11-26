import { Component, OnInit } from '@angular/core';
import { CatServiceService } from '../../services/cat-service.service';
import { CatBreed } from '../../models/CatApi.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  modalStatus: boolean = false
  beedsList !: CatBreed[]
  beedsLists !: CatBreed[]
  

  constructor(private cat: CatServiceService) {
    cat.getBreeds().subscribe(data => {
      this.beedsLists = data.map(result => (
        {
          id: result.id,
          name: result.name
        }
      ))
      this.beedsList = [...this.beedsLists]
    })
  }

  ngOnInit(): void {
  }

  modalToggle() {
    document.getElementsByTagName('body')[0].classList.toggle('d-none')
    this.modalStatus = !this.modalStatus
    this.beedsList = [...this.beedsLists]
  }

  buscar(texto:string){
    console.log(texto);
    if(texto){
      this.beedsList = this.beedsLists.filter(({name}) => name.toLocaleLowerCase().includes(texto.toLocaleLowerCase()))
    }
  }

}
