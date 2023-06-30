import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tentative } from '../../types/nothing';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss'],
})
export class HelloWorldComponent implements OnInit {
  name: Tentative<string> = 'World';

  constructor(private route: ActivatedRoute) {}

  refresh() {
    const name = this.route.snapshot.queryParamMap.get('name');
    if (name) {
      this.name = name;
    }
  }

  ngOnInit(): void {
    this.refresh();
  }
}
