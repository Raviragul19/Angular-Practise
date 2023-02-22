import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent {
  students = [
    { id: 1, name: 'ravi' },
    { id: 2, name: 'rahul' },
    { id: 3, name: 'arun' },
  ];
  constructor(private router: Router) {}
  ngOnInit() {}
  onselect(key: any) {
    this.router.navigate(['/departments', key.id]);
  }
  
}
