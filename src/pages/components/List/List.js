import { parseName } from '../../../utils'

export default {
  name: 'listView',
  props: ['title', 'list'],

  data() {
    const newList = this.list.map((p) => parseName(p))
    const sortedList = newList.sort((a, b) => {
      if (a.publishDate < b.publishDate) {
        return 1
      }

      if (a.publishDate > b.publishDate) {
        return -1
      }

      return 0
    })

    return {
      lists: sortedList,
      title: this.title,
    }
  }
}
