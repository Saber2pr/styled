import { CSSRenderer } from './CSSRenderer';
import { CSSTextRenderer } from './CSSTextRenderer';
import { LessRenderer } from './LessRenderer';

export const styled = {
  _: CSSTextRenderer,
  css: CSSRenderer,
  less: LessRenderer
}
