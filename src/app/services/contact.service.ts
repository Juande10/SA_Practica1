import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  //private url = 'https://api.softwareavanzado.world/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=hal';
  constructor(private http:HttpClient) {
    
  }

  newContact(name){
    let formData = new FormData();
    formData.append('name', name);
    let url = 'https://api.softwareavanzado.world/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=hal';
    this.http.post(url, formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    return;
  }

  getList(){
    let url = 'https://api.softwareavanzado.world/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=hal&filter[search]=201314412';
    return this.http.get(url);
  }
}
