//import Stackable from 'stackable'

class BlogStore {
  constructor() {
    riot.observable(this)

    this.stackable = new Stackable(STACK_ID);

    //this.initData()
    //todo use local storage later on
    const json = window.localStorage.getItem(LOCALSTORAGE_KEY)
    if (!json) {
      this.initData()
    } else {
      this._posts = (json && JSON.parse(json)) || {}
    }
  }

  getPostById(id) {
    return this._posts.data.filter(post => post._id === id)[0]
  }

  initData() {
    var query = {
      '$limit': parseInt(PAGE_LIMIT),
      '$skip': 0
    }

    var q = riot.route.query()
    if (typeof q.page === 'undefined') {
      q.page = 1
    }

    query['$skip'] = (parseInt(q.page) - 1) * query['$limit']

    this.stackable.getContainerItems(CONTAINER_ID, query, (err, res) => {
      //console.log('stackable data', res);
      this._posts = res
      this.saveToStorage()
      this.trigger(riot.SE.POSTS_CHANGED, this._posts)
    });
  }

  saveToStorage() {
    window.localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(this._posts))
  }
}

const instance = new BlogStore()

instance.on(riot.VE.LOAD_POSTS, () => {
  instance.trigger(riot.SE.POSTS_CHANGED, instance._posts)
})

instance.on(riot.VE.RESET_DATA, () => {
  instance.initData()
  instance.trigger(riot.SE.POSTS_CHANGED, instance._posts)
})

// register to riot control by myself
riot.control.addStore(instance)
export default instance
