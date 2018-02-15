/**
 * Created by kulendra on 8/2/18.
 */


import {htmlSafe} from '@ember/string';
import { helper } from '@ember/component/helper';
/* global showdown */
export function formatMarkdown(params) {
  return htmlSafe(new showdown.Converter().makeHtml(params[0]));
}

export default helper(formatMarkdown);
