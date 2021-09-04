import { Component, OnInit, OnDestroy } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { DatabaseService } from 'src/app/services/database.service';
import { Task } from 'src/app/models/task.model';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  // dtOptions: DataTables.Settings = {
  //   pagingType: "full_numbers",
  //   pageLength: 2,
  //   language: {
  //     url: "//cdn.datatables.net/plug-ins/1.11.1/i18n/es_es.json"
  //   },
  //   search: true,
  //   searching: true,
  //   paging: true,
  // };

  // dtTrigger:Subject<any> = this.db.persons$;

  dtOptions: any= {

  };
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(public db: DatabaseService) {}

  persons: Person[] = this.db.persons;
  persons$!: Observable<Person[]>;

  tasks: Task[] = this.db.tasks;
  tasks$!: Observable<Task[]>;

  ngOnInit(): void {
  this.dtOptions = {
    language: {
      url: '//cdn.datatables.net/plug-ins/1.11.1/i18n/es_es.json',
    },
    // Declare the use of the extension in the dom parameter
    dom: 'Bfrtip',
    // Configure the buttons
    buttons: [
      'columnsToggle',
      'copy',
      'print',
      'excel'
    ],
  }

    this.persons$ = this.db.getPersons$();
    this.persons$.subscribe((data) => {
      this.persons = data;
      this.dtTrigger.next();
    });

    this.tasks$ = this.db.getTasks$();
    this.tasks$.subscribe((data) => {
      this.tasks = data;
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
