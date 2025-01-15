import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { FaqComponent } from "./faq/faq.component";
import { GeneralEnquiryComponent } from "./contact/general-enquiry/general-enquiry.component";
import { InternComponent } from "./contact/intern/intern.component";

export const ModuleRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'contact',
        component: GeneralEnquiryComponent
    },
    {
        path: 'intent_job_form',
        component: InternComponent
    },
    {
        path: 'photo-gallery',
        component: GalleryComponent
    },
    {
        path: 'faq',
        component: FaqComponent
    },
    { path: '**', redirectTo: '' }
];
