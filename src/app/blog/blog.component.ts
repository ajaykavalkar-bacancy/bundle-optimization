import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { BlogItemComponent } from './blog-item/blog-item.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, TranslateModule, BlogItemComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  public translate = inject(TranslateService);
  blogs: any[] = [];

  ngOnInit() {
    setTimeout(() => {
      this.blogs = [
        {
          "id": 1,
          "title": "Understanding Internationalization (i18n) in Angular",
          "author": "John Doe",
          "description": "A comprehensive guide to implementing internationalization in Angular applications, including step-by-step instructions for setting up locale support.",
          "createdDate": "2023-09-15T00:00:00Z"
        },
        {
          "id": 2,
          "title": "Building Dynamic Forms in Angular with Reactive Forms",
          "author": "Jane Smith",
          "description": "Learn how to create dynamic and flexible forms in Angular using the Reactive Forms module. This post covers form arrays, custom validators, and more.",
          "createdDate": "2023-09-14T08:00:00Z"
        },
        {
          "id": 3,
          "title": "RxJS Best Practices for Angular Developers",
          "author": "Michael Brown",
          "description": "Master the power of RxJS for reactive programming in Angular. This blog post discusses best practices for using RxJS operators, managing subscriptions, and handling async data.",
          "createdDate": "2023-09-13T16:00:00Z"
        },
        {
          "id": 4,
          "title": "Optimizing Angular Performance with Lazy Loading and Code Splitting",
          "author": "Emily White",
          "description": "This blog focuses on improving Angular app performance by leveraging lazy loading, code splitting, and route optimization techniques.",
          "createdDate": "2023-09-12T00:00:00Z"
        },
        {
          "id": 5,
          "title": "An Introduction to Standalone Components in Angular",
          "author": "Chris Green",
          "description": "An in-depth introduction to standalone components in Angular, explaining how they simplify development by reducing the need for NgModules.",
          "createdDate": "2023-09-11T08:00:00Z"
        }
      ];
    }, 5000)
  }

  remove(index: number): void {
    let findIndex = this.blogs.findIndex(blog => blog.id === index);
    findIndex > -1 && this.blogs.splice(findIndex, 1);
  }

}
