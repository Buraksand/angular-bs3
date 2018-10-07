import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCasePrep'
})
export class TitleCasePrepPipe implements PipeTransform {

  transform(value: string): any {
    if (!value) { return null; }



    const words = value.split(' ');
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (i > 0 && this.isPreposition(words[i])) {
        words[i] = word.toLowerCase();
      } else {
        words[i] = word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
      }

    }

    return words.join(' ').toString();

  }

  private isPreposition(word: string): boolean {
    const prepositions = [
      'of',
      'the',
    ];

    if (prepositions.includes(word.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  }

}
