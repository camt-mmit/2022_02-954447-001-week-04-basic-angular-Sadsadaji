import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent {
  time = new Date();
  UA = navigator.userAgent;
  Lan = navigator.language;
  max = navigator.maxTouchPoints;
  cookies = navigator.cookieEnabled;
  process = navigator.hardwareConcurrency;
}
