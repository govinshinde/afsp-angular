import { Component, inject, Inject, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ContactIndividual } from '../contact-individual';
import { Root } from '../root';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-single-contact',
  templateUrl: './single-contact.component.html',
  styleUrls: ['./single-contact.component.css']
})
export class SingleContactComponent implements OnInit {
  contact: Contact = new Contact();
  contactList: ContactIndividual[] | undefined;
  status!: string;
  rootList: Root[] | undefined;
  private baseurl = "https://afsp-java-virtuous-app.herokuapp.com/getcontactindividual/";
  private allindividualurl = "https://afsp-java-virtuous-app.herokuapp.com/getallcontactindividuals/";
  private archiveindividualurl = "https://afsp-java-virtuous-app.herokuapp.com/archiveindvidual";

  constructor(private contactService: ContactService, private spinner: NgxSpinnerService, private httpClient: HttpClient) {
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');


  }

  searchContact(value: string) {
    this.spinner.show();
    this.httpClient.get<Root[]>(`${this.baseurl}${value}`).subscribe(data => {
      this.rootList = data;
      this.spinner.hide();
    });

  }

  clear_input(value: string) {
    this.contact.value = '';
  }

  archiveContact(id: number | undefined) {
    console.log(id);
    this.contactService.archiveContact(id?.toString(), "1234").subscribe(data => {
      console.log(data);
    });
  }

  checkIfPhoneNumber(type: string) {
    if (type.includes("Phone")) {
      return true;
    } else {
      return false;
    }
  }

  updateContact(id: number | undefined) {
    const idArr: (Root | undefined)[] = [];
    let email: string | undefined;
    this.rootList?.forEach(x => {
      if (x.id != id) {
        idArr.push(x);

      } else {
        //email = x.value;
      }
    });
    if (idArr.length > 0) {
      this.spinner.show();
      this.httpClient.post<string>(`https://afsp-java-virtuous-app.herokuapp.com/archiveindvidual/${id}`, idArr).subscribe({
        next: data => {
          this.status = data;
        },
        error: error => {
          this.status = error.message;
          console.error('There was an error!', error);
        }
      });
      this.spinner.hide();

    }

  }
}
