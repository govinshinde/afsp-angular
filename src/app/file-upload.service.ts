import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  baseApiUrl = "https://afsp-java-virtuous-app.herokuapp.com/duplicatephones";
  emailsApiUrl = "https://afsp-java-virtuous-app.herokuapp.com/duplicateemails";
  addressApiUrl = "https://afsp-java-virtuous-app.herokuapp.com/duplicateaddress";

  constructor(private http: HttpClient) { }

  // Returns an observable
  upload(file:Blob): Observable<any> {

    // Create form data
    const formData = new FormData();

    formData.append("file", file);

    return this.http.post(this.baseApiUrl, formData)
  }


  uploadEmails(file: Blob): Observable<any> {

    // Create form data
    const formData = new FormData();

    formData.append("file", file);

    return this.http.post(this.emailsApiUrl, formData);
  }

  uploadAddress(file: Blob): Observable<any> {

    // Create form data
    const formData = new FormData();

    formData.append("file", file);

    return this.http.post(this.addressApiUrl, formData);
  }
}
