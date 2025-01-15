import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-intern',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  templateUrl: './intern.component.html',
  styleUrl: './intern.component.sass'
})
export class InternComponent {
  interform: FormGroup;

  constructor(private fb: FormBuilder) {
    this.interform = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      resume: ['', Validators.required],
    });
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input?.files ? input.files[0] : null;
  
    if (file) {
      // this.interform.patchValue({ resume: file });
    }
  }
  

  onSubmit() {
    console.log(this.interform)
    if (this.interform.valid) {
      console.log('Form Data:', this.interform.value);
    } else {
      console.log('Form is invalid');
    }
  }

  // Helper to check validation status
  isInvalid(controlName: string): boolean {
    const control = this.interform.get(controlName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }
  
}
