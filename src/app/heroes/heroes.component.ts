import { Component, OnInit } from '@angular/core';

import {Apollo, gql} from 'apollo-angular';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: any[] | undefined 
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
     this.apollo
      .watchQuery({
        query: gql`
          {
            heroes {
              heroTitle
              heroBody
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        this.heroes = result?.data?.heroes;
        this.loading = result.loading;
        this.error = result.error;
      });
  }
  }
