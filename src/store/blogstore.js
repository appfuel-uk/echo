import Stackable from '../stackable.js'

const LOCALSTORAGE_KEY = 'echo-blog'

class BlogStore {
  constructor() {
    riot.observable(this)

    this.stackable = new Stackable('kX8JddwDJqdf');

    //this.initData()
    //todo use local storage later on
    const json = window.localStorage.getItem(LOCALSTORAGE_KEY)
    if (!json) {
      this.initData()
    } else {
      this._posts = (json && JSON.parse(json)) || []
    }
  }

  getPostById(id) {
    return this._posts.filter(post => post._id === id)[0]
  }

  initData() {
    this.stackable.getContainerItems('yuXN5CHkCpfqi8Pk9', (err, res) => {
      console.log('stackable data', res);
      this._posts = res.data
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
