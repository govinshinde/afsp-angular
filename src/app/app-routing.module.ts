import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchContactComponent } from './search-contact/search-contact.component';
import { MergeBulkContactComponent } from './merge-bulk-contact/merge-bulk-contact.component';
import { PhoneNumberListComponent } from './phone-number-list/phone-number-list.component';
import { SingleContactComponent } from './single-contact/single-contact.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { DuplicateaddressComponent } from './duplicateaddress/duplicateaddress.component';

const routes: Routes = [
  { path: 'search-contact', component: SearchContactComponent },
  { path: 'merge-bulk-contact', component: MergeBulkContactComponent },
  { path: 'merge-bulk-phoneNumber', component: PhoneNumberListComponent },
  { path: 'merge-dups-adderess', component: DuplicateaddressComponent },
  { path: 'single-contact', component: SingleContactComponent },
  { path: 'file-upload', component: FileUploadComponent },
  { path: '', redirectTo: 'search-contact', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
