import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container">
      <h1>Contact</h1>
      <div class="card">
        <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              [(ngModel)]="formData.name"
              required
              #name="ngModel"
            >
            <div class="error" *ngIf="name.invalid && (name.dirty || name.touched)">
              Name is required
            </div>
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              [(ngModel)]="formData.email"
              required
              email
              #email="ngModel"
            >
            <div class="error" *ngIf="email.invalid && (email.dirty || email.touched)">
              Valid email is required
            </div>
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              id="message"
              name="message"
              [(ngModel)]="formData.message"
              required
              #message="ngModel"
            ></textarea>
            <div class="error" *ngIf="message.invalid && (message.dirty || message.touched)">
              Message is required
            </div>
          </div>

          <button type="submit" class="btn btn-primary" [disabled]="contactForm.invalid">
            Send Message
          </button>
        </form>
      </div>
    </div>
  `,
  styles: [`
    h1 {
      margin-bottom: var(--spacing-xl);
      font-size: var(--font-size-xl);
    }

    .card {
      max-width: 600px;
      margin: 0 auto;
    }

    .form-group {
      margin-bottom: var(--spacing-lg);

      label {
        display: block;
        margin-bottom: var(--spacing-sm);
        color: var(--text-color);
      }

      input, textarea {
        width: 100%;
        padding: var(--spacing-sm);
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius-sm);
        background-color: var(--background-color);
        color: var(--text-color);
        font-size: var(--font-size-md);
        transition: border-color var(--transition-fast);

        &:focus {
          outline: none;
          border-color: var(--primary-color);
        }
      }

      textarea {
        min-height: 150px;
        resize: vertical;
      }
    }

    .error {
      color: var(--error-color);
      font-size: var(--font-size-sm);
      margin-top: var(--spacing-xs);
    }

    button {
      width: 100%;
      margin-top: var(--spacing-md);
    }
  `]
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.formData);
    // Here you would typically send the form data to a server
    alert('Thank you for your message!');
  }
} 