import { Component } from '@angular/core';
import { Firestore, collectionData, collection, setDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  Todos$: Observable<any[]>;
  todotext = '' ;
  // todos:Array<any>;
  constructor(private firestore: Firestore) {
    const coll = collection(firestore, 'Todos');
    this.Todos$ = collectionData(coll);

    // this.Todos$.subscribe((newTodos) => {
    //   console.log('neue Todos sind:', newTodos);
    //   this.todos = newTodos;
    // });
  }

  addTodo() {
const coll = collection(this.firestore, 'Todos');
setDoc(doc(coll), {name: this.todotext});
  }
}

