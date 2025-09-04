import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {TranslationService} from '../../core/services/shared/translation.service';

@Directive({
  selector: '[appTranslate]',
  standalone: true,
})
export class TranslateDirective implements OnInit, OnDestroy {
  @Input('appTranslate') key: string = '';
  @Input('translateParams') params?: { [key: string]: string | number };

  private langChangeSubscription?: Subscription;

  constructor(private el: ElementRef, private translationService: TranslationService) {}

  ngOnInit() {
    this.updateTranslation();
    this.langChangeSubscription = this.translationService.currentLang$.subscribe(() => {
      this.updateTranslation();
    });
  }

  ngOnDestroy() {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  private updateTranslation() {
    if (this.params) {
      this.el.nativeElement.textContent = this.translationService.translateWithParams(
        this.key,
        this.params,
      );
    } else {
      this.el.nativeElement.textContent = this.translationService.translate(this.key);
    }
  }
}
