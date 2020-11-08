# ionic-modal-example
Shows how to implement a modal window in Ionic (Angular), passing a json array

Why I created this example: 

The documentation on the ionic framework site for ion-modal is incomplete, and could use a good example.
In particular, if you want to pass data that is not a single variable, there is no example.
You might want to pass an array of data that you received from a web api, or some other json object.
This example shows how to do it.

NOTE: When you search Google, there are other examples, but they all use the older "navParms" method in the modal page to retrieve the data sent by the main page.
There is a newer method, using the @Input tag, which populates the data sent by the main page in the modal page, without having to make a separate call to navParms.
This is illustrated in this example.
