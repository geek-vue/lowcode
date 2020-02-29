import Vue from 'vue'
import GeekPage from './GeekPage'
import GeekComponent from './component'
import html from './packages/html'
import alert from './packages/alert'
import aside from './packages/aside/'
import panel from './packages/panel'
import form from './packages/form'
import grid from './packages/grid'
import buttonToolbar from './packages/button-toolbar'
import button from './packages/button'
import dialog from './packages/dialog'
import drawer from './packages/drawer'
import tab from './packages/tab'
import divider from './packages/divider'
import crud from './packages/crud'

Vue.component(GeekPage.name, GeekPage)
Vue.component(GeekComponent.name, GeekComponent)
Vue.component(html.name, html)
Vue.component(alert.name, alert)
Vue.component(aside.name, aside)
Vue.component(panel.name, panel)
Vue.component(form.name, form)
Vue.component(grid.name, grid)
Vue.component(buttonToolbar.name, buttonToolbar)
Vue.component(button.name, button)
Vue.component(dialog.name, dialog)
Vue.component(drawer.name, drawer)
Vue.component(tab.name, tab)
Vue.component(divider.name, divider)
Vue.component(crud.name, crud)