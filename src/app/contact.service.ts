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
  private baseurl = "http://localhost:5005/getallcontactindividual/";
  private baseurlsingle = "http://localhost:5005/getcontactindividual/";
  private archiveurl = "http://localhost:5005/archive/";
  private updateContacturl = "http://localhost:5005/update/";
  private allContacturl = "http://localhost:5005/getallcontactindividuals/";
  private allContactAddressurl = "http://localhost:5005/getallcontactindividualsaddress/";
  private allPhoneNumbersurl = "http://localhost:5005/getallphonenumbers/";
  private allindividualurl = "http://localhost:5005/getallcontactindividuals/";
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
