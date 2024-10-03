import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  languageArray: { title: string, value: string }[] = [
    { title: 'English', value: 'en' },
    { title: 'French', value: 'fr' },
    { title: 'Hindi', value: 'hin' }
  ];
  public translate = inject(TranslateService)
  constructor() {
    this.translate.setDefaultLang('en');
    console.log('Environment:', environment.api_url, environment.production);
    
  }
  // change language
  changeLang(language: string) {
    this.translate.use(language)
  }
}
