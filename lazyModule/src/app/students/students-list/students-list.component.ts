import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent {
  students = [
    { id: 1, name: 'ravi' },
    { id: 2, name: 'rahul' },
    { id: 3, name: 'arun' },
  ];
  constructor(private router: Router) {}
  ngOnInit() {}
 
  gotohome() {
    this.router.navigate(['/home' ]); //here id is a optional parameter
  }
}
