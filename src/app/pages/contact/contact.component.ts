import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { SITE_CONFIG, buildWhatsAppUrl } from '../../core/config/site.config';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, MatIconModule, MatSnackBarModule],
  template: `
    <!-- PAGE HERO -->
    <section class="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-24">
      <div class="bg-tech-grid pointer-events-none absolute inset-0 opacity-50"></div>
      <div
        class="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl"
      ></div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <span
            class="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-sky-300"
          >
            Contact Villa Tech Solutions Limited
          </span>
          <h1 class="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Let’s Talk About Your Project, Site Survey, or Academy Enrollment
          </h1>
          <p class="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
            Reach our team in <strong class="text-white">Nyali, Mombasa County, Kenya</strong> via
            the inquiry form below, direct phone, email, or instant WhatsApp messaging.
          </p>
        </div>
      </div>
    </section>

    <!-- CONTACT FORM & DETAILS -->
    <section class="bg-slate-50 py-16 sm:py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <!-- Contact Form Card -->
          <div class="lg:col-span-7">
            <div class="rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs sm:p-10">
              @if (submitted()) {
                <div class="py-8 text-center">
                  <div
                    class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200"
                  >
                    <mat-icon class="!h-9 !w-9 !text-[36px]">check_circle</mat-icon>
                  </div>
                  <h2 class="mt-5 font-display text-2xl font-extrabold text-slate-950">
                    Message Sent Successfully
                  </h2>
                  <p class="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600">
                    Thank you,
                    <strong class="text-slate-900">{{ lastSubmittedName() }}</strong>!
                    Our team at Villa Tech Solutions Limited has received your inquiry regarding
                    <strong class="text-sky-700">{{ lastSubmittedDepartment() }}</strong> and will
                    respond shortly.
                  </p>

                  <div class="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                    <a
                      [href]="whatsappUrl"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
                    >
                      <mat-icon class="!h-4 !w-4 !text-[18px]">chat</mat-icon>
                      <span>Continue on WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      (click)="resetForm()"
                      class="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              } @else {
                <div>
                  <h2 class="font-display text-2xl font-extrabold text-slate-950">
                    Send Us a Message
                  </h2>
                  <p class="mt-2 text-sm text-slate-600">
                    Fill in your details below and select the department that best matches your
                    request.
                  </p>
                </div>

                <form
                  [formGroup]="contactForm"
                  (ngSubmit)="onSubmit()"
                  novalidate
                  class="mt-7 space-y-5"
                >
                  <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        for="contact-name"
                        class="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-700"
                      >
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        formControlName="fullName"
                        placeholder="e.g. Rashid Mwangi"
                        class="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20"
                      />
                      @if (isInvalid('fullName')) {
                        <p class="mt-1.5 text-xs text-rose-600">
                          Please enter your full name (minimum 2 characters).
                        </p>
                      }
                    </div>

                    <div>
                      <label
                        for="contact-email"
                        class="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-700"
                      >
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        formControlName="email"
                        placeholder="you@company.co.ke"
                        class="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20"
                      />
                      @if (isInvalid('email')) {
                        <p class="mt-1.5 text-xs text-rose-600">
                          Please enter a valid email address.
                        </p>
                      }
                    </div>
                  </div>

                  <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        for="contact-phone"
                        class="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-700"
                      >
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        formControlName="phone"
                        placeholder="+254 712 345 678"
                        class="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20"
                      />
                      @if (isInvalid('phone')) {
                        <p class="mt-1.5 text-xs text-rose-600">
                          Please enter a valid phone number.
                        </p>
                      }
                    </div>

                    <div>
                      <label
                        for="contact-dept"
                        class="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-700"
                      >
                        Department / Service *
                      </label>
                      <select
                        id="contact-dept"
                        formControlName="department"
                        class="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20"
                      >
                        @for (option of departmentOptions; track option) {
                          <option [value]="option">{{ option }}</option>
                        }
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      for="contact-subject"
                      class="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-700"
                    >
                      Subject *
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      formControlName="subject"
                      placeholder="e.g. Office Wi-Fi & CCTV Quote in Nyali"
                      class="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20"
                    />
                    @if (isInvalid('subject')) {
                      <p class="mt-1.5 text-xs text-rose-600">
                        Please enter a short subject (at least 4 characters).
                      </p>
                    }
                  </div>

                  <div>
                    <label
                      for="contact-message"
                      class="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-700"
                    >
                      Project Details / Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows="5"
                      formControlName="message"
                      placeholder="Tell us about your requirements, preferred timeline, or questions..."
                      class="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20"
                    ></textarea>
                    @if (isInvalid('message')) {
                      <p class="mt-1.5 text-xs text-rose-600">
                        Please enter a message of at least 15 characters.
                      </p>
                    }
                  </div>

                  <div class="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                    <p class="text-xs text-slate-500">
                      We respect your privacy. Typical response time: under 2 business hours.
                    </p>
                    <button
                      type="submit"
                      class="inline-flex items-center justify-center gap-2 rounded-xl bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-sky-700 active:scale-[0.98]"
                    >
                      <span>Send Message</span>
                      <mat-icon class="!h-4 !w-4 !text-[18px]">send</mat-icon>
                    </button>
                  </div>
                </form>
              }
            </div>
          </div>

          <!-- Contact Information Sidebar -->
          <div class="space-y-6 lg:col-span-5">
            <!-- Instant WhatsApp Card -->
            <div class="rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 p-7 text-white shadow-lg">
              <div class="flex items-center gap-3">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                  <mat-icon class="!h-6 !w-6 !text-[24px]">chat</mat-icon>
                </div>
                <div>
                  <span class="text-xs font-bold uppercase tracking-wider text-emerald-100">
                    Fastest Response
                  </span>
                  <h3 class="font-display text-xl font-extrabold">WhatsApp Direct Desk</h3>
                </div>
              </div>
              <p class="mt-3 text-sm leading-relaxed text-emerald-50">
                Need quick pricing for Wi-Fi/CCTV installation, urgent KRA/eCitizen support, a
                website quote, or Academy cohort fees? Message us directly on WhatsApp.
              </p>
              <a
                [href]="whatsappUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-emerald-800 shadow-sm transition-all hover:bg-emerald-50"
              >
                <mat-icon class="!h-4 !w-4 !text-[18px]">chat</mat-icon>
                <span>Start WhatsApp Chat</span>
              </a>
            </div>

            <!-- Phone, Email & Location Details -->
            <div class="rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs">
              <h3 class="font-display text-lg font-extrabold text-slate-950">
                Direct Contact Details
              </h3>

              <div class="mt-5 space-y-5">
                <div class="flex items-start gap-3.5">
                  <div
                    class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-700"
                  >
                    <mat-icon class="!h-5 !w-5 !text-[20px]">call</mat-icon>
                  </div>
                  <div>
                    <p class="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Phone Numbers
                    </p>
                    <a
                      [href]="'tel:' + siteConfig.contact.phoneHref"
                      class="mt-0.5 block font-display text-sm font-bold text-slate-950 hover:text-sky-700"
                    >
                      {{ siteConfig.contact.phoneDisplay }}
                    </a>
                    <p class="text-xs text-slate-500">
                      Alt: {{ siteConfig.contact.secondaryPhoneDisplay }}
                    </p>
                  </div>
                </div>

                <div class="flex items-start gap-3.5">
                  <div
                    class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-700"
                  >
                    <mat-icon class="!h-5 !w-5 !text-[20px]">mail</mat-icon>
                  </div>
                  <div>
                    <p class="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Email Addresses
                    </p>
                    <a
                      [href]="'mailto:' + siteConfig.contact.email"
                      class="mt-0.5 block break-all font-display text-sm font-bold text-slate-950 hover:text-sky-700"
                    >
                      {{ siteConfig.contact.email }}
                    </a>
                    <a
                      [href]="'mailto:' + siteConfig.contact.academyEmail"
                      class="block break-all text-xs text-slate-500 hover:text-sky-700"
                    >
                      Academy: {{ siteConfig.contact.academyEmail }}
                    </a>
                  </div>
                </div>

                <div class="flex items-start gap-3.5">
                  <div
                    class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-700"
                  >
                    <mat-icon class="!h-5 !w-5 !text-[20px]">location_on</mat-icon>
                  </div>
                  <div>
                    <p class="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Office Location
                    </p>
                    <p class="mt-0.5 font-display text-sm font-bold text-slate-950">
                      {{ siteConfig.location.area }}, {{ siteConfig.location.city }},
                      {{ siteConfig.location.country }}
                    </p>
                    <p class="text-xs text-slate-500">{{ siteConfig.location.landmark }}</p>
                  </div>
                </div>

                <div class="flex items-start gap-3.5">
                  <div
                    class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-700"
                  >
                    <mat-icon class="!h-5 !w-5 !text-[20px]">schedule</mat-icon>
                  </div>
                  <div>
                    <p class="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Business Hours
                    </p>
                    <ul class="mt-1 space-y-0.5 text-xs text-slate-600">
                      @for (hour of siteConfig.contact.businessHours; track hour) {
                        <li>{{ hour }}</li>
                      }
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Social Links -->
              <div class="mt-6 border-t border-slate-100 pt-5">
                <p class="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Connect on Social Media
                </p>
                <div class="mt-3 flex flex-wrap gap-2">
                  @for (social of siteConfig.socials; track social.platform) {
                    <a
                      [href]="social.url"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700"
                    >
                      <span>{{ social.label }}</span>
                      <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">open_in_new</mat-icon>
                    </a>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- GOOGLE MAPS EMBED & LOCATION SECTION -->
        <div
          class="mt-14 overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-xs"
        >
          <div
            class="flex flex-col justify-between gap-4 border-b border-slate-100 p-6 sm:flex-row sm:items-center sm:px-8"
          >
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-sky-700">
                Find Us on the Map
              </span>
              <h2 class="mt-1 font-display text-xl font-extrabold text-slate-950">
                {{ siteConfig.location.fullAddress }}
              </h2>
            </div>
            <a
              [href]="siteConfig.location.mapDirectionsUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-800 transition-colors hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700"
            >
              <mat-icon class="!h-4 !w-4 !text-[17px] text-sky-600">directions</mat-icon>
              <span>Open in Google Maps</span>
            </a>
          </div>

          <div class="relative h-[380px] w-full bg-slate-100">
            <iframe
              [src]="safeMapUrl"
              title="Villa Tech Solutions Limited Location — Nyali, Mombasa County, Kenya"
              class="h-full w-full border-0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  private readonly snackBar = inject(MatSnackBar);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly route = inject(ActivatedRoute);

  readonly siteConfig = SITE_CONFIG;
  readonly whatsappUrl = buildWhatsAppUrl();
  readonly safeMapUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    SITE_CONFIG.location.mapEmbedUrl
  );

  readonly departmentOptions = [
    'Networking (Wi-Fi, LAN & CCTV)',
    'Operations (Cyber, Printing, KRA, HELB, SHA, NSSF, eCitizen)',
    'Software Engineering (Websites, Web Apps, E-Commerce & SEO)',
    'Villa Tech Academy (Coding Programs)',
    'Personal Branding & Career Services (CV, LinkedIn, Company Profile)',
    'General Corporate Inquiry',
  ];

  readonly submitted = signal(false);
  readonly lastSubmittedName = signal('');
  readonly lastSubmittedDepartment = signal('');

  readonly contactForm = this.fb.nonNullable.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[+\d\s()-]{7,20}$/)]],
    department: [this.departmentOptions[2], [Validators.required]],
    subject: ['', [Validators.required, Validators.minLength(4)]],
    message: ['', [Validators.required, Validators.minLength(15)]],
  });

  ngOnInit(): void {
    const topic = this.route.snapshot.queryParamMap.get('topic');
    if (topic) {
      this.contactForm.patchValue({ subject: `Inquiry regarding ${topic}` });
    }
  }

  isInvalid(controlName: keyof typeof this.contactForm.controls): boolean {
    const control = this.contactForm.controls[controlName];
    return control.invalid && (control.touched || control.dirty);
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const { fullName, department } = this.contactForm.getRawValue();
    this.lastSubmittedName.set(fullName);
    this.lastSubmittedDepartment.set(department);
    this.submitted.set(true);

    this.snackBar.open(
      'Thank you! Your message has been sent to Villa Tech Solutions Limited.',
      'Dismiss',
      {
        duration: 5000,
        panelClass: ['villa-snackbar-success'],
      }
    );
  }

  resetForm(): void {
    this.submitted.set(false);
    this.contactForm.reset({
      fullName: '',
      email: '',
      phone: '',
      department: this.departmentOptions[2],
      subject: '',
      message: '',
    });
  }
}
