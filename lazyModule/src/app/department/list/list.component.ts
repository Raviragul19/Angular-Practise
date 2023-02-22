import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  departments = [
    { id: 1, name: 'CSE' },
    { id: 2, name: 'ECE' },
    { id: 3, name: 'IT' },
  ];
  constructor(private router: Router, private route: ActivatedRoute) {}
  public deptId: number = 0;
  ngOnInit() {
  }
  gotohome() {
    this.router.navigate(['/home' ]); 
  }
}
