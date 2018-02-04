/**
 * Created by kulendra on 2/2/18.
 */

import { helper } from '@ember/component/helper';
/* global moment */
export function formatDate(params) {
  return moment(params[0]).fromNow();
}

export default helper(formatDate);
