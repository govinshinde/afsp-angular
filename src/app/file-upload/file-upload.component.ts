import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  // Variable to store shortLink from api response
  shortLink: string = "";
  emailmsg: string = "";
  addressmsg: string = "";
  loading: boolean = false; // Flag variable
  file!: File; // Variable to store file

  // Inject service 
  constructor(private fileUploadService: FileUploadService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  // On file Select
  onChange(event:any) {
    this.file = event.target.files[0];
  }

  // OnClick of button Upload
  onUpload() {
    this.loading = !this.loading;
    this.spinner.show();
    this.fileUploadService.upload(this.file).subscribe(
      (event: any) => {
          // Short link via api response
          this.shortLink = "File Successfully uploaded";

          this.loading = false; // Flag variable
          this.spinner.hide();

      }
    );
  }

  onUploadEmails() {
    this.loading = !this.loading;
    this.spinner.show();
    this.fileUploadService.uploadEmails(this.file).subscribe(
      (event: any) => {
        // Short link via api response
        this.emailmsg = "File Successfully uploaded";

        this.loading = false; // Flag variable
        this.spinner.hide();

      }
    );
  }

  onUploadAddress() {
    this.loading = !this.loading;
    this.spinner.show();
    this.fileUploadService.uploadAddress(this.file).subscribe(
      (event: any) => {
        // Short link via api response
        this.addressmsg = "File Successfully uploaded";

        this.loading = false; // Flag variable
        this.spinner.hide();

      }
    );
  }

}
