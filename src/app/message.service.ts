import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';;

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private toastr: ToastrService) { }

  messagesNotifySuccess(messages : string,title : any) :void {
    this.toastr.success(messages,title);
  }

  messagesNotifyErr(messages : string,title : any) :void {
    this.toastr.error(messages,title);
  }

}
