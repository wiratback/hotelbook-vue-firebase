Vue.component('navbar',{
  props:['title'],
  template:`
  <nav class="navbar navbar-expand-sm bg-info navbar-dark sticky-top">
    <a class="navbar-brand"><i class="fas fa-hotel"></i>Back Hotel - {{title}}</a>
  </nav>`

});