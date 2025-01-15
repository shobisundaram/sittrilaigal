import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.sass'
})
export class GalleryComponent {
  zoomed = false;
  zoomLevel = 1; // Default zoom level
minZoomLevel = 1; // Minimum zoom level
maxZoomLevel = 3; // Maximum zoom level
  gallery = [
    {
      title: 'test1',
      images: [
        { src: 'assets/images/apm-1.jpg' },
        { src: 'assets/images/photo2.jpg' },
        { src: 'assets/images/photo3.jpg' },
        { src: 'assets/images/photo4.jpg' },
        { src: 'assets/images/photo5.jpg' },
      ]
    },
    {
      title: 'test2',
      images: [
        { src: 'assets/images/photo1.jpg' },
        { src: 'assets/images/photo2.jpg' },
        { src: 'assets/images/photo3.jpg' },
        { src: 'assets/images/photo4.jpg' },
        { src: 'assets/images/photo5.jpg' },
      ]
    },
    {
      title: 'test3',
      images: [
        { src: 'assets/images/photo1.jpg' },
        { src: 'assets/images/photo2.jpg' },
        { src: 'assets/images/photo3.jpg' },
        { src: 'assets/images/photo4.jpg' },
        { src: 'assets/images/photo5.jpg' },
      ]
    }
  ];



  currentGalleryIndex: number | null = null;  // To track which gallery is being viewed
  currentIndex: number = 0;  // To track the current image being displayed in the slider

  // Open the slider for the first image in a selected gallery
  openSlider(galleryIndex: number, index: number) {
    this.currentGalleryIndex = galleryIndex;
    this.currentIndex = index;
  }

  // Close the slider
  closeSlider() {
    this.currentGalleryIndex = null;
    document.exitFullscreen();
  }

  // Navigate to the previous image in the slider
  prevImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.gallery[this.currentGalleryIndex!].images.length - 1;
    }
  }

  // Navigate to the next image in the slider
  nextImage() {
    if (this.currentIndex < this.gallery[this.currentGalleryIndex!].images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }
  toggleFullscreen(): void {
    const elem = document.documentElement;
    if (!document.fullscreenElement) {
      elem.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }
  toggleZoom(): void {
    this.zoomed = !this.zoomed;
  }
  // Zoom In
zoomIn(): void {
  if (this.zoomLevel < this.maxZoomLevel) {
    this.zoomLevel += 0.5; // Adjust the step value for finer control
  }
}

// Zoom Out
zoomOut(): void {
  if (this.zoomLevel > this.minZoomLevel) {
    this.zoomLevel -= 0.5; // Adjust the step value for finer control
  }
}
resetZoom(): void {
  this.zoomLevel = 1;
}
}
