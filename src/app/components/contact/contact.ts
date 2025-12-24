import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterLink],
    templateUrl: './contact.html',
    styleUrl: './contact.css'
})
export class ContactComponent {
    formData = {
        name: '',
        email: '',
        phone: '',
        query: ''
    };

    isSubmitted = false;

    submitForm() {
        // Simulate API call
        console.log('Form Submitted:', this.formData);
        this.isSubmitted = true;

        // Auto-reset after a few seconds if desired, 
        // but user wants the message to stay or be prominent.
    }
}
