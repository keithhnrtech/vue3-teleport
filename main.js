const app = Vue.createApp({
  el: '#app'
});

app.component('count', {
  template: `
    <teleport to="#outside_app">
    <div>Hello count</div>
  </teleport>
`
})

app.component('main-app', {
  template: `
    <count></count>
    <div>Other code inside main-app</div>
`
})

app.mount('#app')

