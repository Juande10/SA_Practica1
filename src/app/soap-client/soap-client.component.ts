import { Component} from '@angular/core';
import { Client} from 'ngx-soap';
import { ContactService } from '../services/contact.service';


@Component({
  selector: 'app-soap-client',
  templateUrl: './soap-client.component.html',
  styleUrls: ['./soap-client.component.css']
})
export class SoapClientComponent{

  client: Client;
  message: any;
  private contacts:any[];

  constructor(private contact:ContactService) {
    setInterval(() => {
      this.contact.getList()
      .subscribe(resp => {
        this.contacts = resp._embedded.item;
      })
    }, 1000);
  }

  Crear(nombre){
    this.contact.newContact(nombre);
    this.List10();
  }

  List10(){
    this.contact.getList().subscribe(
      (data) => {
        console.log(data._embedded.item);
        this.contacts = data._embedded.item;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
