import { Injectable } from '@angular/core';
import { EntityUIQuery, QueryEntity } from '@datorama/akita';
import { PostsStore, PostsState, PostUIState, PostUI } from './posts.store';

@Injectable({ providedIn: 'root' })
export class PostsQuery extends QueryEntity<PostsState> {
  public ui: EntityUIQuery<PostUIState, PostUI>;

  constructor(protected store: PostsStore) {
    super(store);
    this.createUIQuery();
  }

  public toggleActive(id) {
    this.store.ui.update(id, (resourceUI) => {
      return {
        ...resourceUI,
        isActive: !resourceUI.isActive,
      };
    });

    console.log(this.store.ui);
  }
}
