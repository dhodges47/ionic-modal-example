# ionic-modal-example
Shows how to implement a modal window in Ionic (Angular), passing a json array.

The key code for this example is here: Main window: /src/pages/test. Modal window: /src/pages/modal.

Why I created this example: 

The documentation on the ionic framework site for ion-modal is incomplete, and could use a good example.
In particular, if you want to pass data that is not a single variable, there is no example.
You might want to pass an array of data that you received from a web api, or some other json object.
This example shows how to do it.

NOTE: When you search Google, there are other examples, but they all use the older "navParms" method in the modal page to retrieve the data sent by the main page.
There is a newer method, using the @Input tag, which populates the data sent by the main page in the modal page, without having to make a separate call to navParms.
This is illustrated in this example.

The main window (/src/pages/test) has a json array of data called "listprops".
In our example, this is a list of people's names, and the transactionID of the ticket they bought.

When the user presses the "Open Modal" button, the main window launches the modal window as follows:
``` javascript
 const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: { ticketholders: listProps},
    });
``` 
The json array is passed in "componentProps". Notice that the json array is not passed in componentProps directly. It is wrapped in a json object with one property, "ticketholders".

The modal window (/src/pages/modal) opens and populated with the json array of data ( see the "@Input" declaration).
``` javascript
@Input('ticketholders') ticketholders: ModalProperties

```
There is now an array called "ticketholders" that contains the data sent by the main page.
When the user selects a row of data, the transactionID for that row is passed back to the main window.


