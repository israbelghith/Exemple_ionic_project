import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(public http: HttpClient) { }
getListLivres(){
  return new Promise(resolve=>{
    this.http.get('http://localhost:8080/livresAdmin/livres').subscribe(data=>{
      resolve(data);
    },
    err=>{
      console.log(err);
    });
  });
}

getLivre(id: string){
  return new Promise(resolve=>{
    this.http.get('http://localhost:8080/livresAdmin/livres/'+id).subscribe(data=>{
      resolve(data);
      //console.log(data);
    },
    err=>{
      console.log(err);
    });
  });

}

}
