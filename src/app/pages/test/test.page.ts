import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {ModalPage} from '../modal/modal.page';
import {ModalProperties} from '../../interfaces/modalProperties';
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
    var modalProps1 = <ModalProperties>{ };
    modalProps1.transaction_id = '15223422';
    modalProps1.customerName= 'Robin Hodges';
    modalProps1.checked = false;
    var modalProps2 = <ModalProperties>{ };
    modalProps2.transaction_id = '15223499';
    modalProps2.customerName= 'David Hodges';
    modalProps2.checked = false;
    let listProps: Array<ModalProperties> = [];
    listProps.push(modalProps1);
    listProps.push(modalProps2);
    console.log(listProps);
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: { ticketholders: listProps},
    });
   modal.onDidDismiss().then((dataReturned) => {
     console.log(dataReturned);
      if (dataReturned.data !== 'Cancel') {
        this.dataReturned = dataReturned.data;
      }
      else{
        this.dataReturned = 'User cancelled the search';
      }
    });
    return await modal.present();
  }
}