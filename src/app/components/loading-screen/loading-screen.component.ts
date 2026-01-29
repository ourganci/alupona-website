import { Component, signal, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-loading-screen',
  standalone: true,
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss']
})
export class LoadingScreenComponent implements OnInit {
  showBorder = signal(false);
  startFadeOut = signal(false);
  removeFromDOM = signal(false);
  shouldShowIntro = signal(true); // ← NEU: Steuert ob Intro gezeigt wird
  @Output() loadingComplete = new EventEmitter<void>();

  ngOnInit() {
    // Prüfe ob Intro schon mal gezeigt wurde
    const hasSeenIntro = localStorage.getItem('alupona-intro-seen');

    if (hasSeenIntro === 'true') {
      // Intro wurde schon gesehen → Skip!
      this.shouldShowIntro.set(false);
      this.removeFromDOM.set(true);
      this.loadingComplete.emit();
      return;
    }

    // Intro zum ersten Mal → Zeigen!
    this.shouldShowIntro.set(true);

    // Border-Animation starten
    setTimeout(() => {
      this.showBorder.set(true);
    }, 300);

    // Fade-out STARTEN
    setTimeout(() => {
      this.startFadeOut.set(true);
      this.loadingComplete.emit();
      
      // Merke: Intro wurde gesehen
      localStorage.setItem('alupona-intro-seen', 'true');
    }, 2800);

    // Element ENTFERNEN (nach Fade-Dauer)
    setTimeout(() => {
      this.removeFromDOM.set(true);
    }, 4800);
  }
}
