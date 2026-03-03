import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-holi-component',
  imports: [CommonModule],
  templateUrl: './holi-component.html',
  styleUrl: './holi-component.css',
})
export class HoliComponent {
   quotes: string[] = [
    "Let the colors of Holi spread happiness in your life.",
    "Holi is the festival of love and unity.",
    "Splash into the colors of joy and celebration.",
    "May your life be as colorful as Holi.",
    "Celebrate colors, celebrate happiness!"
  ];

  currentQuote: string = this.quotes[0];

  changeQuote() {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    this.currentQuote = this.quotes[randomIndex];
  }

  sharePage() {
    const shareText = `🌸 Happy Holi 2026 🌸
Celebration from Dhananjay Kumar 🎉
"${this.currentQuote}"
${window.location.href}`;

    if (navigator.share) {
      navigator.share({
        title: 'Happy Holi 2026',
        text: shareText,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(shareText);
      alert("Link copied! Share it with your friends 🎊");
    }
  }

}
