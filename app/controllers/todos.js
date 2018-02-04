import Controller from '@ember/controller';
import {sort} from '@ember/object/computed';

export default Controller.extend({
  filter:'',
  filterTodos:function() {
    var filter=this.get('filter');
    //console.log(filter);
    var rx=new RegExp(filter,'gi');
    var todos=this.model;

    return todos.filter(function (todo) {
      return todo.get('title').match(rx)||todo.get('body').match(rx);
    });
  }.property('arrangedContent','filter'),
  sortedProperties:['date:asc'],
  sortedTodos: sort('model','sortedProperties')
});
