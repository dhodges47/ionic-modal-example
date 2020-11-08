import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { ModalProperties } from '../../interfaces/modalProperties';
@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  dataReturned: any;
  constructor(public modalController: ModalController) { }


  ngOnInit() {
  }


  async openModal() {

    let listProps: Array<ModalProperties> = []; // this will hold the array that we'll send to the modal window
    var modalProps1 = <ModalProperties>{};
    modalProps1.transaction_id = '15223422';
    modalProps1.customerName = 'Christie Heitman';
    modalProps1.checked = false;
    listProps.push(modalProps1);

    var modalProps2 = <ModalProperties>{};
    modalProps2.transaction_id = '15223499';
    modalProps2.customerName = 'Jennifer Jacobs';
    modalProps2.checked = false;
    listProps.push(modalProps2);


    // create the modal window
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: { ticketholders: listProps },
    });
    // handle the return data when the modal window closes
    modal.onDidDismiss().then((dataReturned) => {
      console.log(dataReturned);
      if (dataReturned.data !== 'Cancel') {
        this.dataReturned = `You selected transactionID ${dataReturned.data}`;
      }
      else {
        this.dataReturned = 'User cancelled the modal page.';
      }
    });
    // launch the modal window
    return await modal.present();
  }
}