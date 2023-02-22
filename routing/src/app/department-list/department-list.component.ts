import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss'],
})
export class DepartmentListComponent {
  departments = [
    { id: 1, name: 'CSE' },
    { id: 2, name: 'ECE' },
    { id: 3, name: 'IT' },
  ];
  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit() {}
  onselect(key: any) {
    this.router.navigate(['/departments', key.id]);
  }
}
