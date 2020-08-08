import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  //private url = 'https://api.softwareavanzado.world/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=hal';
  constructor(private http:HttpClient) {
    
  }

  genToken(){
    let url = 'https://api.softwareavanzado.world/index.php?option=token&api=oauth2';
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

  //Token 3830726b890720191e389a3db312b2e25029105e
  getList(){
    let url = 'https://api.softwareavanzado.world/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=hal&filter[search]=201314412';
    let t = '3830726b890720191e389a3db312b2e25029105e';
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization", "Bearer " + t);
    return this.http.get(url, { headers: headers});
  }
}
