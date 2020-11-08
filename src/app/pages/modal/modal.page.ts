import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {ModalProperties} from '../../interfaces/modalProperties';

//
// This is the modal page, called from search, to display duplicate search-by-last-name results
// The user select one, and the result is passed back to the search page
//
@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
 
 
  @Input('ticketholders') ticketholders: ModalProperties // the main page sends an array of search results through this variable

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  
  }
  
  async selectTransaction(item: number) {
  // get the transaction ID of the selected item and send it back to the search window
   var transactionID = this.ticketholders[item].transaction_id;
   await this.modalController.dismiss(transactionID);;
}
  
  async closeModal() {
    await this.modalController.dismiss('Cancel');
  }
}
