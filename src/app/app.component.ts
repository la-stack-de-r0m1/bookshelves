import { Component } from '@angular/core';
import firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookshelves';

  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyAGUOUd8xdaAEgFHs1cxP4ZNHRtyUVBMos",
      authDomain: "bookshelves-9457d.firebaseapp.com",
      projectId: "bookshelves-9457d",
      databaseURL: "https://bookshelves-9457d-default-rtdb.europe-west1.firebasedatabase.app/",
      storageBucket: "bookshelves-9457d.appspot.com",
      messagingSenderId: "303431526279",
      appId: "1:303431526279:web:ca819c704e23588d011522"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

}
