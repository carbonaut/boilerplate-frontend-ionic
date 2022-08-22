import { Component, OnInit } from '@angular/core';
import { NgEntityServiceLoader } from '@datorama/akita-ng-entity-service';
import { PostsQuery } from './state/posts.query';
import { PostsService } from './state/posts.service';

@Component({
  selector: 'app-store-example',
  templateUrl: './store-example.component.html',
  styleUrls: ['./store-example.component.scss'],
})
export class StoreExampleComponent implements OnInit {
  posts$ = this.postsQuery.selectAll();

  loaders = this.loader.loadersFor('posts');

  constructor(
    private postsQuery: PostsQuery,
    private postsService: PostsService,
    private loader: NgEntityServiceLoader
  ) {}

  ngOnInit() {
    this.postsService.get().subscribe((data) => {
      console.log(data);
    });
    this.loader.loading$.subscribe((data) => {
      console.log(data);
    });
  }

  getOne(id) {
    this.postsService.get(id).subscribe((data) => {
      console.log(data);
    });
  }

  remove(id) {
    this.postsService.delete(id).subscribe();
  }

  toggleActive(id) {
    this.postsQuery.toggleActive(id);
  }
}
