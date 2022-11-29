import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  showSuccessAlert(isToast, icon, text) {
    var content = "<strong><font color='white'>" + text + "</font></strong>";
    Swal.fire({
      toast: isToast,
      position: "top-end",
      icon: icon,
      html: content,
      iconColor: "white",
      showConfirmButton: false,
      timer: 3500,
      background: "green",
    });
  }

  showErrorAlert(isToast, icon, text) {
    let content = "<strong><font color='white'>" + text + "</font></strong>";
      Swal.fire({
        toast: isToast,
        position: "top-end",
        icon: icon,
        html: content,
        iconColor: "white",
        showConfirmButton: false,
        timer: 3500,
        background: "red",
      });
    }
}
