import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent {
  isMenuOpen = false;

  menuItems = [
    { label: 'Home', link: '#' },
    { label: 'Who We Are',
      submenu: [
        { label: 'Our Journey', link: '#' },
        { label: 'Our Mission', link: '#' },
        { label: 'Our Partners', link: '#' },
        { label: 'Financials', link: '#' }
      ]
    },
    { label: 'What We Do', link: '#' },
    { label: 'Be A Part With Us', link: '#' },
    { label: 'Publications', link: '#' },
    { label: 'Gallery', link: '/photo-gallery' },
    { label: 'Agaram Tv', link: '#' },
    { label: 'FAQ', link: '/faq' },
    { label: 'Contact',
      submenu: [
        { label: 'General Enquiry', link: 'contact' },
        { label: 'Intern Opportunities', link: 'intent_job_form' },
        { label: 'Career Opportunities', link: '#' },
      ]
     },
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.lockBodyScroll(this.isMenuOpen);
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.lockBodyScroll(false);
  }

  private lockBodyScroll(lock: boolean) {
    document.body.style.overflow = lock ? 'hidden' : '';
  }
}
