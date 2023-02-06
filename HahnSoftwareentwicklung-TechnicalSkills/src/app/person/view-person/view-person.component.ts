import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpProviderService } from '../../service/Service/http-provider.service';
import { WebApiService } from '../../service/Service/web-api.service';

@Component({
  selector: 'app-view-person',
  templateUrl: './view-person.component.html',
  styleUrls: ['./view-person.component.scss']
})
export class ViewPersonComponent implements OnInit{

  personId: any;
  personDetail : any= [];
   
  constructor(public webApiService: WebApiService, private route: ActivatedRoute, private httpProvider : HttpProviderService) { }
  
  ngOnInit(): void {
    this.personId = this.route.snapshot.params;      
    this.getPersonById(this.personId);
  }

  getPersonById(id: number) {       
    this.httpProvider.getPersonById(id).subscribe((data : any) => {      
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.personDetail = resultData;
        }
      }
    },
    (error :any)=> { }); 
  }
}
