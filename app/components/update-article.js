import Ember from 'ember';

export default Ember.Component.extend({
  updateArticleForm: false,
  actions: {
    updateArticleForm() {
      this.set('updateArticleForm', true);
    },

    update(article) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        image: this.get('image'),
        content: this.get('content'),
      };
      this.set('updateArticleForm', false);
      this.sendAction('update', article, params);
    }
  }
});
