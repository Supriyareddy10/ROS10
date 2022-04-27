import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'ngx-document-action-cell',
  template:`<div class="">
  <i
    class="fa fa-eye action-icon"
    aria-hidden="true"
    style="cursor: pointer;
    vertical-align: middle;
    margin-right: 10px;"
    (click)="viewDocument()"
  ></i>
  <i class="fa fa-download ml-2" aria-hidden="true" (click)="downloadDocument()" style="cursor: pointer; cursor: pointer;
  vertical-align: middle;
  margin-right: 10px;"></i>
  <i
    class="fa fa-trash action-icon"
    aria-hidden="true"
    style="cursor: pointer; 
    vertical-align: middle;
    margin-right: 10px;"
    (click)="deleteDocument()"
  ></i>
</div>`
})
export class ViewDocumentActionCellComponent implements OnInit {
  constructor() {}

  data;
  params;

  ngOnInit(): void {}

  agInit(params) {
    this.params = params;
    this.data = params.data;
  }
  viewDocument() {
    this.params.context.componentParent.viewDocument(this.data.id);
  }
  deleteDocument() {
    this.params.context.componentParent.editDocument(this.data.id);
  }
  downloadDocument() {
    this.params.context.componentParent.downloadDocument(this.data.id);
  }
}
