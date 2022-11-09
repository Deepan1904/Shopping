import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-site-name',
  templateUrl: './site-name.component.html',
  styleUrls: ['./site-name.component.css']
})
export class SiteNameComponent implements OnInit {

  constructor(private router:Router) { }
  setName:string="";
  ngOnInit(): void {
  }
  set()
  {
    this.router.navigate(['/adminPage',this.setName]);
    console.log(this.setName);
    sessionStorage.setItem('SiteName', this.setName);
  }

  
}