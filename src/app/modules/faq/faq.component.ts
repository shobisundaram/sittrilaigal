import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.sass'
})
export class FaqComponent {
  accordionItems = [
    { title: 'Item 1', content: 'This is the content of item 1This is the content of item 1This is the content of item 1This is the content of item 1This is the content of item 1This is the content of item 1This is the content of item 1This is the content of item 1This is the content of item 1This is the content of item 1This is the content of item 1This is the content of item 1This is the content of item 1This is the content of item 1This is the content of item 1This is the content of item 1This is the content of item 1This is the content of item 1', isOpen: false },
    { title: 'Item 2', content: 'This is the content of item 2', isOpen: false },
    { title: 'Item 3', content: 'This is the content of item 3', isOpen: false },
  ];
  openIndex: number | null = null;

  toggle(index: number): void {
    // Toggle the accordion section (open/close)
    this.openIndex = this.openIndex === index ? null : index;
  }
}
