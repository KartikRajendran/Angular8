import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <p>
      You Selected Department With Id {{departmentId}}
    </p>
    <div>
      <button (click)="showOverview()">Overview</button>
      <button (click)="showContact()">Contacts</button>
    </div>
    <router-outlet></router-outlet>
    <div>
      <button (click)="goPrevious()">Previous</button>
      <button (click)="goNext()">Next</button>
      <button (click)="gotoDepartments()" >Back</button>
    </div>
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
    // this.router.navigate(['/departments', Id]);
    this.router.navigate(['../', Id], {relativeTo: this.route});
  }

  goPrevious() {
    const Id = this.departmentId - 1;
    // this.router.navigate(['/departments', Id]);
    this.router.navigate(['../', Id], {relativeTo: this.route});
  }

  gotoDepartments() {
    const Id = this.departmentId;
    // this.router.navigate(['/departments', {id: Id}]);
    this.router.navigate(['../', {id: Id}] , {relativeTo: this.route});
  }

  showOverview() {
    this.router.navigate(['overview'] , {relativeTo: this.route});
  }

  showContact() {
    this.router.navigate(['contact'] , {relativeTo: this.route});
  }

}
