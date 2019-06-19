import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <p>
      You Selected Department With Id {{departmentId}}
    </p>
    <a (click)="goPrevious()">Previous</a>
    <a (click)="goNext()">Next</a>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  // tslint:disable-next-line:radix

  /* Simple route (But only works fine if navigated to another url not on same url - snapshot method)*/
  // const tempId = parseInt(this.route.snapshot.paramMap.get('id'));
  // this.departmentId = tempId;

  this.route.paramMap.subscribe((params: ParamMap) => {
    // tslint:disable-next-line:radix
    const id = parseInt(params.get('id'));
    this.departmentId = id;
  });
  }

  goNext() {
    const Id = this.departmentId + 1;
    this.router.navigate(['/departments', Id]);
  }

  goPrevious() {
    const Id = this.departmentId - 1;
    this.router.navigate(['/departments', Id]);
  }

}
