/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-04-14
 * @author Liang <liang@maichong.it>
 */

import alaska from 'alaska';

export default class Link extends alaska.Model {
  static defaultSort = '-sort';
  static icon = 'link';
  static defaultColumns = 'pic title url sort activated createdAt';
  static api = { list: 1 };

  static defaultFilters = ctx => {
    if (ctx.service.id === 'alaska-admin') return null;
    return {
      activated: true
    };
  };

  static fields = {
    title: {
      label: 'Title',
      type: String,
      required: true
    },
    url: {
      label: 'URL',
      type: String,
      required: true
    },
    pic: {
      label: 'Picture',
      type: 'image'
    },
    activated: {
      label: 'Activated',
      type: Boolean,
      private: true
    },
    sort: {
      label: 'Sort',
      type: Number,
      default: 0,
      private: true
    },
    createdAt: {
      label: 'Created At',
      type: Date,
      private: true
    }
  };

  preSave() {
    if (!this.createdAt) {
      this.createdAt = new Date;
    }
  }
}
