import Route from '@ember/routing/route';

export default Route.extend({
  actions:{
    editTodo:function (id) {
      var self=this;

      var title=this.get('model.title');
      var body=this.get('model.body');
      var date=this.get('model.date');

      this.store.findRecord('todo',id).then(function (todo) {
        todo.set('title',title);
        todo.set('body',body);
        todo.set('date',new Date(date));

        todo.save();

        self.transitionTo('todos');

      })
    },
    deleteTodo:function (id) {
      var self=this;

      this.store.findRecord('todo',id).then(function (todo) {
       todo.deleteRecord();

        todo.save();

        self.transitionTo('todos');

      })
    }
  }
});
