import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-blog-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-item.component.html',
  styleUrl: './blog-item.component.scss'
})
export class BlogItemComponent {
@Input() item: any;
@Output() remove: EventEmitter<number> = new EventEmitter<number>();
}
