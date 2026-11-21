import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { buildWhatsAppUrl } from '../../../core/config/site.config';

@Component({
  selector: 'app-whatsapp-float',
  standalone: true,
  imports: [MatIconModule, MatTooltipModule],
  template: `
    <a
      [href]="whatsappUrl"
      target="_blank"
      rel="noopener noreferrer"
      matTooltip="Chat with Villa Tech on WhatsApp"
      matTooltipPosition="left"
      aria-label="Chat with Villa Tech Solutions on WhatsApp"
      class="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-xl shadow-emerald-900/25 ring-2 ring-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-300"
    >
      <mat-icon class="!h-5 !w-5 !text-[20px]">chat</mat-icon>
      <span class="hidden sm:inline">WhatsApp Us</span>
    </a>
  `,
})
export class WhatsAppFloatComponent {
  readonly whatsappUrl = buildWhatsAppUrl();
}
