import { justifyText } from '../src/utils/textJustifier';

describe('justifyText function', () => {
  it('should justify text to 80 characters per line', () => {
    const input = "Longtemps, je me suis couché de bonne heure. Parfois, à peine ma bougie éteinte, mes yeux se fermaient si vite que je n’avais pas le temps de me dire: «Je m’endors.»";
    const result = justifyText(input);
    const lines = result.split('\n');
    expect(lines.every(line => line.length === 80 || line.length <= 80)).toBeTruthy();
  });
});