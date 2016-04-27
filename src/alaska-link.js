/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-04-14
 * @author Liang <liang@maichong.it>
 */

import alaska from 'alaska';

export default class LinkService extends alaska.Service {
  constructor(options, alaska) {
    options = options || {};
    options.dir = options.dir || __dirname;
    options.id = options.id || 'alaska-link';
    super(options, alaska);
  }
}
