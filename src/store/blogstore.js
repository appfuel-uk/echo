import Stackable from '../stackable.js'

const LOCALSTORAGE_KEY = 'echo-blog'

class BlogStore {
  constructor() {
    riot.observable(this)

    this.stackable = new Stackable('kX8JddwDJqdf');


    this.stackable.getContainerItems('yuXN5CHkCpfqi8Pk9', (err, res) => {
      console.log(err, res.data);
    });

    const json = window.localStorage.getItem(LOCALSTORAGE_KEY)
    if (!json) {
      this.initData()
    } else {
      this._posts = (json && JSON.parse(json)) || []
    }
  }

  getPostById(id) {
    return this._posts.filter(post => post.postId === id)[0]
  }

  initData() {
    const defaultPosts = [
      { postId: 1, title: 'Best xbox games', content: 'Halo, GOW',
        category: 'collection', likes: 10 },
    ]


    this._posts = defaultPosts
    this.saveToStorage()
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

instance.on(riot.VE.LIKE_POST, id => {
  instance._posts.forEach(post => {
    if (post.postId === id) {
      post.likes = post.likes + 1
    }
  })
  instance.saveToStorage()
  instance.trigger(riot.SE.POSTS_CHANGED, instance._posts)
})

// register to riot control by myself
riot.control.addStore(instance)
export default instance
