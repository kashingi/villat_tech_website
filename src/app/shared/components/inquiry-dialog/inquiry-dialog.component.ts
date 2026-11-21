import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { buildWhatsAppUrl } from '../../../core/config/site.config';

export interface InquiryDialogData {
  mode: 'course' | 'career' | 'service';
  title: string;
  subtitle?: string;
  preselectedTopic: string;
}

@Component({
  selector: 'app-inquiry-dialog',
  standalone: true,
  imports: [ReactiveFormsModule, MatDialogModule, MatIconModule, MatSnackBarModule],
  template: `
    <div class="max-h-[90vh] overflow-y-auto bg-white">
      <!-- Dialog Header -->
      <div class="relative bg-navy-900 px-6 py-6 text-white sm:px-8">
        <div class="flex items-start justify-between gap-4">
          <div>
            <span
              class="inline-flex items-center rounded-full border border-sky-400/30 bg-sky-400/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-sky-300"
            >
              {{
                data.mode === 'course'
                  ? 'Villa Tech Academy Enrollment'
                  : data.mode === 'career'
                    ? 'Personal Branding & Career Services'
                    : 'Project & Service Inquiry'
              }}
            </span>
            <h2 class="mt-2 font-display text-xl font-bold text-white sm:text-2xl">
              {{ data.title }}
            </h2>
            @if (data.subtitle) {
              <p class="mt-1 text-sm text-slate-300">{{ data.subtitle }}</p>
            }
          </div>
          <button
            type="button"
            (click)="close()"
            aria-label="Close modal"
            class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
          >
            <mat-icon class="!h-5 !w-5 !text-[20px]">close</mat-icon>
          </button>
        </div>
      </div>

      <!-- Body -->
      <div class="p-6 sm:p-8">
        @if (submitted()) {
          <div class="py-4 text-center">
            <div
              class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200"
            >
              <mat-icon class="!h-9 !w-9 !text-[36px]">check_circle</mat-icon>
            </div>
            <h3 class="mt-5 font-display text-2xl font-bold text-slate-950">
              Inquiry Received
            </h3>
            <p class="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-600">
              Thank you, <span class="font-semibold text-slate-900">{{ form.value.fullName }}</span>!
              Your request regarding
              <span class="font-semibold text-sky-700">{{ form.value.topic }}</span>
              has been logged. Our Nyali team will reach out shortly via phone or email.
            </p>

            <div
              class="mx-auto mt-6 flex max-w-md flex-col gap-2.5 sm:flex-row sm:justify-center"
            >
              <a
                [href]="buildDirectWhatsApp()"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
              >
                <mat-icon class="!h-4 !w-4 !text-[18px]">chat</mat-icon>
                <span>Fast-Track on WhatsApp</span>
              </a>
              <button
                type="button"
                (click)="close()"
                class="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
              >
                Done
              </button>
            </div>
          </div>
        } @else {
          <form [formGroup]="form" (ngSubmit)="submit()" novalidate class="space-y-4">
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label class="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Full Name *
                </label>
                <input
                  type="text"
                  formControlName="fullName"
                  placeholder="e.g. Amina Hassan"
                  class="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-2.5 text-sm text-slate-900 outline-none transition-all focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20"
                />
                @if (isInvalid('fullName')) {
                  <p class="mt-1 text-xs text-rose-600">Please enter your full name (min 2 characters).</p>
                }
              </div>

              <div>
                <label class="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  formControlName="phone"
                  placeholder="e.g. +254 712 345 678"
                  class="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-2.5 text-sm text-slate-900 outline-none transition-all focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20"
                />
                @if (isInvalid('phone')) {
                  <p class="mt-1 text-xs text-rose-600">Please enter a valid phone number.</p>
                }
              </div>
            </div>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label class="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  formControlName="email"
                  placeholder="you@example.com"
                  class="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-2.5 text-sm text-slate-900 outline-none transition-all focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20"
                />
                @if (isInvalid('email')) {
                  <p class="mt-1 text-xs text-rose-600">Please enter a valid email address.</p>
                }
              </div>

              <div>
                <label class="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Program / Service *
                </label>
                <input
                  type="text"
                  formControlName="topic"
                  class="w-full rounded-xl border border-slate-200 bg-sky-50/60 px-4 py-2.5 text-sm font-medium text-slate-900 outline-none focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20"
                />
              </div>
            </div>

            @if (data.mode === 'course') {
              <div>
                <label class="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Preferred Study Mode
                </label>
                <select
                  formControlName="studyMode"
                  class="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-2.5 text-sm text-slate-900 outline-none transition-all focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20"
                >
                  <option value="In-Person (Nyali, Mombasa)">In-Person — Nyali, Mombasa</option>
                  <option value="Hybrid (In-Person + Online Labs)">Hybrid — In-Person & Live Online</option>
                  <option value="Evening / Weekend Cohort">Evening / Weekend Cohort</option>
                </select>
              </div>
            }

            <div>
              <label class="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-700">
                Additional Notes *
              </label>
              <textarea
                rows="3"
                formControlName="notes"
                placeholder="Tell us about your goals, preferred start date, or project requirements..."
                class="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-2.5 text-sm text-slate-900 outline-none transition-all focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20"
              ></textarea>
              @if (isInvalid('notes')) {
                <p class="mt-1 text-xs text-rose-600">Please provide a brief note (at least 10 characters).</p>
              }
            </div>

            <div class="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <a
                [href]="buildDirectWhatsApp()"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-800"
              >
                <mat-icon class="!h-4 !w-4 !text-[17px]">chat</mat-icon>
                <span>Or inquire instantly via WhatsApp</span>
              </a>

              <div class="flex items-center gap-2.5">
                <button
                  type="button"
                  (click)="close()"
                  class="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  class="inline-flex items-center justify-center gap-2 rounded-xl bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-sky-700"
                >
                  <span>Submit Request</span>
                  <mat-icon class="!h-4 !w-4 !text-[17px]">send</mat-icon>
                </button>
              </div>
            </div>
          </form>
        }
      </div>
    </div>
  `,
})
export class InquiryDialogComponent {
  readonly data = inject<InquiryDialogData>(MAT_DIALOG_DATA);
  private readonly dialogRef = inject(MatDialogRef<InquiryDialogComponent>);
  private readonly fb = inject(FormBuilder);
  private readonly snackBar = inject(MatSnackBar);

  readonly submitted = signal(false);

  readonly form = this.fb.nonNullable.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    phone: ['', [Validators.required, Validators.pattern(/^[+\d\s()-]{7,20}$/)]],
    email: ['', [Validators.required, Validators.email]],
    topic: [this.data.preselectedTopic, [Validators.required]],
    studyMode: ['In-Person (Nyali, Mombasa)'],
    notes: ['', [Validators.required, Validators.minLength(10)]],
  });

  isInvalid(controlName: keyof typeof this.form.controls): boolean {
    const control = this.form.controls[controlName];
    return control.invalid && (control.touched || control.dirty);
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitted.set(true);
    this.snackBar.open(
      'Thank you! Your inquiry has been received by Villa Tech Solutions.',
      'Close',
      {
        duration: 4500,
        panelClass: ['villa-snackbar-success'],
      }
    );
  }

  buildDirectWhatsApp(): string {
    const topic = this.form.value.topic || this.data.preselectedTopic;
    const name = this.form.value.fullName ? ` My name is ${this.form.value.fullName}.` : '';
    return buildWhatsAppUrl(
      `Hello Villa Tech Solutions Limited!${name} I would like to inquire about: ${topic}.`
    );
  }

  close(): void {
    this.dialogRef.close();
  }
}
