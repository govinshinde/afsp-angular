import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchContactComponent } from './search-contact/search-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MergeBulkContactComponent } from './merge-bulk-contact/merge-bulk-contact.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from "ngx-spinner";
import { PhoneNumberListComponent } from './phone-number-list/phone-number-list.component';
import { SingleContactComponent } from './single-contact/single-contact.component';
import { TagListComponent } from './tag-list/tag-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { DuplicateaddressComponent } from './duplicateaddress/duplicateaddress.component';


@NgModule({
  declarations: [
    AppComponent,
    PhoneNumberListComponent,
    SearchContactComponent,
    MergeBulkContactComponent,
    SingleContactComponent,
    TagListComponent,
    FileUploadComponent,
    DuplicateaddressComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
