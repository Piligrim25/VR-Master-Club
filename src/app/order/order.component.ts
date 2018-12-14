import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  game$: Object;

  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.game$ = params.id );
  }

  ngOnInit() {
    this.data.getGame(this.game$).subscribe(
      data => this.game$ = data
    );
  }

}
