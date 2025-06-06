import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberSuffix',
  standalone: true,
})
export class NumberSuffixPipe implements PipeTransform {

  private suffixes: string[] = [
    '', 'K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'Dc', 'Ud', 'Dd', 'Td', 'Qad', 'Qid', 'Sxd', 'Spd', 'Ocd', 'Nod'
  ];

  transform(value: number): string {
    if (!isFinite(value)) return '∞';
    if (value < 1000) return value.toFixed(1);

    let exponent = Math.floor(Math.log10(value));
    let index = Math.floor(exponent / 3);

    if (index >= this.suffixes.length) {
      // Passe en notation scientifique au-delà du dernier suffixe connu
      return value.toExponential(2);
    }

    const shortValue = value / Math.pow(10, index * 3);
    return shortValue.toFixed(2) + this.suffixes[index];
  }
}
