import Ember from 'ember';

export default Ember.Component.extend({
  addNewArticle: false,
  actions: {
    articleFormShow() {
      this.set('addNewArticle', true);
    },

    save() {
      var params = {
        title: this.get('title') ? this.get('title') : "",
        author: this.get('author') ? this.get('author') : "",
        image: this.get('image') ? this.get('image') : "",
        content: this.get('content') ? this.get('content') : ""
      };
      this.set('addNewArticle', false),
      this.sendAction('save', params);
    }
  }
});
