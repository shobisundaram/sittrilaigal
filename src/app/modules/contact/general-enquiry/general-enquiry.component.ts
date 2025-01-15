import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-general-enquiry',
  standalone: true,
  imports: [GoogleMapsModule ],
  templateUrl: './general-enquiry.component.html',
  styleUrl: './general-enquiry.component.sass'
})
export class GeneralEnquiryComponent {
  center: google.maps.LatLngLiteral = { lat: 9.8823, lng: 78.0720 }; // Example: New York City
  zoom = 12;
  mapOptions: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    scrollwheel: false,
    mapTypeControl: false,
    zoomControl: true,
    draggable: true
  };
}
