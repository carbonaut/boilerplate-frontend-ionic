import { Injectable } from '@angular/core';
import { EntityState, EntityStore, EntityUIStore, StoreConfig } from '@datorama/akita';

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}
export type PostUI = {
  isActive: boolean;
};

export interface PostsState extends EntityState<Post> {}
export interface PostUIState extends EntityState<PostUI> {}

export function createInitialState() {
  return [];
}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'posts',
})
export class PostsStore extends EntityStore<PostsState> {
  ui: EntityUIStore<PostUIState>;

  constructor() {
    super(createInitialState());
    this.createUIStore().setInitialEntityState({ isActive: false });
  }
}
