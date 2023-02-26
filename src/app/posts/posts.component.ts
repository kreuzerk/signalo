import {Component} from "@angular/core";
import {JsonPipe} from "@angular/common";
import {PostsService} from "./posts.service";

@Component({
  selector: 'posts',
  template: `
    <pre>
      {{posts() | json}}
    </pre>
  `,
  standalone: true,
  imports: [JsonPipe]
})
export class PostsComponent {
  posts = this.postsService.getPosts();

  constructor(private postsService: PostsService) {
  }
}
