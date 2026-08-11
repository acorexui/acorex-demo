import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { AXLookupComponent } from '@acorex/components/lookup';
import { AXDecoratorClearButtonComponent } from '@acorex/components/decorators';
import { AXLabelComponent } from '@acorex/components/label';
import { AXTreeViewNode } from '@acorex/components/tree-view';
import { firstValueFrom } from 'rxjs';

@Component({
  templateUrl: 'api-tree.component.html',
  imports: [
    AXLookupComponent,
    AXDecoratorClearButtonComponent,
    AXLabelComponent,
  ],
})
export class ApiTreeComponent {
  readonly #http = inject(HttpClient);
  readonly #apiBase = 'https://jsonplaceholder.typicode.com';
  readonly #usersApi = `${this.#apiBase}/users`;

  singleValue = signal<unknown | null>(null);
  multiValue = signal<unknown | null>([]);

  /**
   * Lazy HTTP tree: Users → Posts → Comments.
   * Ids are prefixed (user- / post- / comment-) so they stay unique across levels.
   */
  treeDataSource = async (id?: string): Promise<AXTreeViewNode[]> => {
    if (!id) {
      const users = await firstValueFrom(
        this.#http.get<Array<{ id: number; name: string; username: string }>>(
          this.#usersApi
        )
      );
      return users.map((user) => ({
        id: `user-${user.id}`,
        title: user.name,
        tooltip: `@${user.username}`,
        childrenCount: 10,
        data: user,
      }));
    }

    if (id.startsWith('user-')) {
      const userId = id.slice('user-'.length);
      const posts = await firstValueFrom(
        this.#http.get<Array<{ id: number; title: string; userId: number }>>(
          `${this.#apiBase}/posts`,
          { params: { userId } }
        )
      );
      return posts.map((post) => ({
        id: `post-${post.id}`,
        title: post.title,
        childrenCount: 5,
        data: post,
      }));
    }

    if (id.startsWith('post-')) {
      const postId = id.slice('post-'.length);
      const comments = await firstValueFrom(
        this.#http.get<
          Array<{ id: number; name: string; email: string; postId: number }>
        >(`${this.#apiBase}/comments`, { params: { postId } })
      );
      return comments.map((comment) => ({
        id: `comment-${comment.id}`,
        title: comment.name,
        tooltip: comment.email,
        data: comment,
      }));
    }

    return [];
  };
}
