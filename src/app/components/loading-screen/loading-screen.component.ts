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
  removeFromDOM = signal(false); // ← NEU: Entfernt Element komplett
  @Output() loadingComplete = new EventEmitter<void>();

  ngOnInit() {
    // Border-Animation starten
    setTimeout(() => {
      this.showBorder.set(true);
    }, 300);

    // Fade-out STARTEN
    setTimeout(() => {
      this.startFadeOut.set(true);
      this.loadingComplete.emit();
    }, 2800);

    // Element ENTFERNEN (nach Fade-Dauer: 2800ms + 2000ms Transition)
    setTimeout(() => {
      this.removeFromDOM.set(true);
    }, 4800);
  }
}
