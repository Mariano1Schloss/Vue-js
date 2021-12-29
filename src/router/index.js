import Vue from 'vue' 
import Router from 'vue-router' 
import WindowsListItem from '../components/WindowsListItem.vue'
import WindowsList from '../components/WindowsList.vue'
import RoomsList from '../components/RoomsList.vue'
import RoomsListItem from '../components/RoomsListItem.vue'
import CreateWindow from '../components/CreateWindow.vue'
import DeleteConfirmation from '../components/DeleteConfirmation.vue'


Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/window',
      name: 'window',
      component: WindowsListItem
  },
  {
    path:'/windows',
    name:'WindowsList',
    component:WindowsList
  },
  {
    path: '/rom',
    name: 'room',
    component: RoomsListItem
},
{
  path:'/rooms',
  name:'RoomsList',
  component:RoomsList
},
{
  path:'/deleteWindow',
  name:'DeleteConfirmation',
  component: DeleteConfirmation
},
{
  path: '/createWindow',
  name : 'CreateWindow',
  component : CreateWindow
}
  ]
})
