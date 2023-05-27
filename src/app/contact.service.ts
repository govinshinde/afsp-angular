import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from './contact';
import { Observable } from 'rxjs';
import { ContactIndividual } from './contact-individual';
import { Root } from './root';


@Injectable({
  providedIn: 'root'
})
export class ContactService { 
  private baseurl = "https://afsp-java-virtuous-app.herokuapp.com/getallcontactindividual/";
  private baseurlsingle = "https://afsp-java-virtuous-app.herokuapp.com/getcontactindividual/";
  private archiveurl = "https://afsp-java-virtuous-app.herokuapp.com/archive/";
  private updateContacturl = "https://afsp-java-virtuous-app.herokuapp.com/update/";
  private allContacturl = "https://afsp-java-virtuous-app.herokuapp.com/getallcontactindividuals/";
  private allContactAddressurl = "https://afsp-java-virtuous-app.herokuapp.com/getallcontactindividualsaddress/";
  private allPhoneNumbersurl = "https://afsp-java-virtuous-app.herokuapp.com/getallphonenumbers/";
  private allindividualurl = "https://afsp-java-virtuous-app.herokuapp.com/getallcontactindividuals/";
  contactList: Contact[] | undefined;
  constructor(private httpClient: HttpClient) {
  }

  getContactList(contact: Contact): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(`${this.baseurl}/ ${contact.value}`);
  }

  searchContact(contact: Contact): Observable<ContactIndividual[]> {
    console.log('calling search api : ');
  //  return this.httpClient.get<ContactIndividual[]>(`${this.baseurl}`);
    return this.httpClient.get<ContactIndividual[]>(`${this.baseurl}${contact.value}`);
  }

  searchContactByEmail(email: string | undefined): Observable<Contact[]> {
    console.log('calling search api : ');
    return this.httpClient.get<Contact[]>(`${this.baseurl}${email}`);
  }

  archiveContact(id: string | undefined, map: String | undefined) {
    console.log('calling archive api : ');
    return this.httpClient.get<Root[]>(`${this.archiveurl}${id}/${map}`);
  }

  updateContact(contact: Contact) {
    console.log('calling update api : ');
    return this.httpClient.get<Contact[]>(`${this.updateContacturl}${contact.id}`);
  }

  getAllContacts() {
    setTimeout(() => {
    }, 5000);

    return this.httpClient.get<Root[]>(`${this.allContacturl}`);

  }

  getAllContactsAddress() {
      return this.httpClient.get<Root[]>(`${this.allContactAddressurl}`);
  }


  getAllPhoneNumbers() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers, withCredentials: true };
    return this.httpClient.get<Root[]>(`${this.allPhoneNumbersurl}`);
  }
}
