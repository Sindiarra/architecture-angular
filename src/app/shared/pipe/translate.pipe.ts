import { Pipe, PipeTransform } from '@angular/core';
import {TranslationService} from '../../core/services/shared/translation.service';


@Pipe({
  name: 'translate',
  standalone: true,
  pure: false, // Make it impure to update when language changes
})
export class TranslatePipe implements PipeTransform {
  constructor(private translationService: TranslationService) {}

  transform(key: string, params?: { [key: string]: string | number }): string {
    if (params) {
      return this.translationService.translateWithParams(key, params);
    }
    return this.translationService.translate(key);
  }
}
