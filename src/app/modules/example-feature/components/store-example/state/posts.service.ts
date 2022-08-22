import { Injectable } from '@angular/core';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { PostsStore, PostsState } from './posts.store';

@Injectable({ providedIn: 'root' })
export class PostsService extends NgEntityService<PostsState> {
  constructor(protected store: PostsStore) {
    super(store);
  }
}
