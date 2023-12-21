import { Component, OnInit } from "@angular/core";
import { CatService } from "../../services/cat.service";
import { LoadingController } from "@ionic/angular";


interface Cat {
  breed: string;
  country: string;
  origin: string;
  coat: string;
  pattern: string;
}

@Component({
    selector: 'app-cats',
    templateUrl: 'cats.page.html',
    styleUrls: ['cats.page.scss'],
})
export class CatsPage implements OnInit {

  public cats : Cat[] = [];
  public catsAll : Cat[] = [];
  public searchTerm: string = '';
  public currentPage = 1;
  public pageSize = 25;
  public endIndex = this.pageSize;
  public totalPages = 4;


 constructor(private catService: CatService, private loadingCtrl : LoadingController) {
 }

    ngOnInit() {
        this.loadCats(this.currentPage);
        
    }

    async loadCats(page : number) {

            const loading = await this.loadingCtrl.create({
              message: 'Hellooo',
              spinner: 'bubbles'
            });

            await loading.present();
          
          
          this.catService.getCats(this.currentPage).subscribe((data) => {
            loading.dismiss();
            this.cats = data.data;
        })


        this.catService.getAllCats().subscribe((data) => {
          this.catsAll = data.data;
        })
    }
    searchChanged() {
      this.cats = this.catsAll.filter(cat => 
        cat.breed.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        cat.coat.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        cat.pattern.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.loadCats(this.currentPage);
      }
    }
  
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.loadCats(this.currentPage);
      }
    }
}