import Controller from '@ember/controller';

export default Controller.extend({
  buttons: [{ icon: 'playlist-add', label: 'test', buttonId: 'test' }],
  actions: {
    myAction() {
      console.log('this is a test');
    }
  }
});
