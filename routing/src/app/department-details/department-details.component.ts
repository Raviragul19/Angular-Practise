import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.scss'],
})
export class DepartmentDetailsComponent implements OnInit {
  public deptId: any;
  constructor(public route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // let id: string | null = this.route.snapshot.paramMap.get('id');
    // let parsedId: number = parseInt(id!, 10);
    // // ! after id is the "non-null assertion operator" that tells TypeScript to treat id as a non-null value
    // // second argument of 10 specifies that the number should be parsed in base 10 (i.e., decimal).
    // this.deptId = parsedId;

    //using paramap observable
    this.route.paramMap.subscribe((params: any) => {
      let id = parseInt(params.get('id'));
      this.deptId = id;
    });
  }
  next() {
    let nxt = this.deptId + 1;
    this.router.navigate(['/departments', nxt]);
  }
  previous() {
    let last = this.deptId - 1;
    this.router.navigate(['/departments', last]);
  }
  gotodepartments() {
    let selectedId = this.deptId ? this.deptId : null; //implementing null check here
    this.router.navigate(['/departments', { id: selectedId }]); //here id is a optional parameter
  }
  firstChild() {
    this.router.navigate(['departments/:id/child1'], {
      relativeTo: this.route,
    });
  }
  secondChild() {
    this.router.navigate(['departments/:id/child2'], {
      relativeTo: this.route,
    });
  }
}
