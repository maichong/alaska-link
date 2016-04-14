/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-04-14
 * @author Liang <liang@maichong.it>
 */

import alaska from 'alaska';

export default class LinkService extends alaska.Service {
  constructor(options, alaska) {
    options = options || {};
    options.id = 'alaska-link';
    options.dir = __dirname;
    super(options, alaska);
  }
}
