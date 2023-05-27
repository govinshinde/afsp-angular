import { Component, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import { FormGroup, FormBuilder, FormArray, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ViewChild, ElementRef } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { Injectable } from '@angular/core';
import { Root } from '../root';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-merge-bulk-contact',
  templateUrl: './merge-bulk-contact.component.html',
  styleUrls: ['./merge-bulk-contact.component.css']
})
export class MergeBulkContactComponent {
  contact: Contact = new Contact();
  contactList!: Contact[];
  archiveContactList: Root[] = [];
  tempContactList: Root[] = [];
  ReadMore: boolean = true;
  rootList!: Root[];
  alert: boolean = false;
  @ViewChild("hoverBtn") hoverBtn!: ElementRef;

  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];

  //hiding info box
  visible: boolean = false;
  status!: string;
  @Injectable({
    providedIn: 'root'
  })

  myForm!: FormGroup;
  idArr: (any | undefined)[] = [];
  mapArr: (any | undefined)[] = []; // used id's to remove from inMemory hashmap


  constructor(private contactService: ContactService, private fb: FormBuilder, private spinner: NgxSpinnerService, private httpClient: HttpClient) { }
  ngOnInit(): void {
    this.myForm = this.fb.group({
      id: this.fb.array([])
    });
    //this.getAllContact();
  }

  onclick(id: number) {
    alert(id);
    this.contactList.map(contact => {
      contact.giftList.list.map(gift => {

        if (gift.contactId == id) {
          console.log("id: " + id + "  gift id: " + gift.contactId);
          this.ReadMore = !this.ReadMore; //not equal to condition
          this.visible = !this.visible
        }
      });
    });

  }



  onTableDataChange(event: any) {
    this.page = event;
   // this.getAllContact();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
   // this.getAllContact();
  }


  getAllContact() {
    this.spinner.show();
    this.contactService.getAllContacts().subscribe(data => {
      console.log(data);
      this.spinner.hide();
      this.archiveContactList = [];
      this.rootList = data.sort(function (a, b) {
        if (a.email < b.email) {
          return -1;
        }
        if (a.email > b.email) {
          return 1;
        }
        return 0;
      });
    });
    
  }


  mergeContact() {
    if (this.idArr.length > 0) {
      this.spinner.show();
      this.httpClient.post<string>(`http://localhost:5005/archiveindvidual/${this.idArr.toString()}`, this.mapArr).subscribe({
        next: data => {
          this.status = data;
        },
        error: error => {
          this.status = error.message;
          console.error('There was an error!', error);
        }
      });
      this.spinner.hide();
      this.getAllContact();
    }
    this.alert = true;
    setTimeout(() => {
      this.alert = false;
    }, 5000);
    this.archiveContactList = [];
  }

  hideDiv() {
    this.alert = false;
  }
  
  onChange(root: Root, target: EventTarget | null) {
    const input = target as HTMLInputElement;

    const householdidFormArray = <FormArray>this.myForm.controls['id'];
    if (input.checked) {
      this.tempContactList = [];
      householdidFormArray.push(new FormControl(root.id));
      this.rootList?.map(x => {
        if (x.id != root.id && x.email == root.email) {
          this.archiveContactList?.push(x);
          this.idArr.push(root.id);
          this.mapArr.push(x);
        } else {
          this.tempContactList.push(x);
        }
        this.rootList = this.tempContactList;
      });
    } else {
      let index = householdidFormArray.controls.findIndex(x => x.value == root.id)
      householdidFormArray.removeAt(index);
    }
    console.log("idArr: " + this.idArr);
    this.mapArr.forEach(x => { console.log(x) });
  }

  removearrElement(arr: number[], x: number) {
    for (var i = arr.length; i--;) {
      if (arr[i] === x) {
        arr.splice(i, 1);
      }
    }
  }

  removearrObjectElement(arr: any[], x: number) {
    for (var i = arr.length; i--;) {
      if (arr[i]['id'] === x) {
        arr.splice(i, 1);
      }
    }
  }


  onChangeArchive(contact: Root, target: EventTarget | null) {
    const input = target as HTMLInputElement;
    const householdidFormArray = <FormArray>this.myForm.controls['id'];
    if (input.checked) {
      this.tempContactList = [];
      householdidFormArray.push(new FormControl(contact.id));
      this.rootList.map(x => {
        if (x.email == contact.email) {
          this.removearrElement(this.idArr, x.id);
        }
      });
      this.archiveContactList?.map(x => {
        let index = householdidFormArray.controls.findIndex(x => x.value == contact.id)
        householdidFormArray.removeAt(index);
        this.removearrObjectElement(this.mapArr, contact.id);
        if (x.id == contact.id) {
          this.rootList?.push(x);
          this.tempContactList.push(x);
        }
        this.tempContactList.map(x => {
          if (x.id == contact.id) {
            this.removeByAttr(this.archiveContactList, 'id', x.id);
            this.removearrElement(this.idArr, x.id);
          }
        })
      });

      this.rootList = this.rootList.sort(function (a, b) {
        if (a.email < b.email) {
          return -1;
        }
        if (a.email > b.email) {
          return 1;
        }
        return 0;
      });
      console.log("idArr: " + this.idArr);
      this.mapArr.forEach(x => { console.log(x) });
    }
  }

  removeByAttr(arr: any, attr: any, value: any) {
    var i = arr.length;
    while (i--) {
      if (arr[i]
        && arr[i].hasOwnProperty(attr)
        && (arguments.length > 2 && arr[i][attr] === value)) {

        arr.splice(i, 1);

      }
    }
    return arr;
  }
  mouseEnter() {
    console.log("mouseEnter", this.hoverBtn.nativeElement);
    this.hoverBtn.nativeElement.click();
  }

  mouseLeave() {
    console.log("mouse leave :");
    this.hoverBtn.nativeElement.click();
  }


  getToolTipData(issueId: number): string {
    let temp = '';
    const issue = this.contactList.find(i => i.giftList.list.forEach(x => {
      if (x.id == issueId) {
        `Title: ${x.id} ||
        State: ${x.giftType} ||
        Date: ${x.giftDate}`;
      }
    }));
    return temp;
  }


}
