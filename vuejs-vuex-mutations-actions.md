## vuex

- store.status : data
- store.getters : computed
- store.mutations : method
- store.actions : dispatch async mutation job

```javascript
export default new Vuex.store({
  state: {
    allUsers: [{name:'mulder',gender:'M'},{name:'scully',gender:'F'},],
  },
  getters: {
    userCount:  state => {
      return state.allUsers.length
    },
    manCount: state => state.allUsers.filter(d => d.gender === 'M').length,
  },
  mutations: {
    addUser: (state, payload) => {
      state.allUsers.push(payload)
    },
  },
})
```

```html
<h1> user length : {{$store.state.allUsers.length}} </h1>
<h1> user length : {{$store.getters.userCount}} </h1>

<v-list-title v-for="(user, index) in $store.state.allUsers" :key="index">
</v-list-title>
```
  
### mapMutation

```html
<h1> user length : {{$store.state.allUsers.length}} </h1>
<h1> user length : {{count}} </h1>
<h1> man length : {{mcount}} </h1>


<v-list-title v-for="(user, index) in users" :key="index">
  <div> {{ user }} </div>
</v-list-title>

<script>

import { mapGetters, mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters({count:'userCount', mcount:'manCount'}),
    ...mapState({users: 'allUsers'}), 
    // ...mapState(['allUsers']),
  },
  method: {
    ...mapMutations(['addUser']),
    signUp() {
      let user = {name: 'xman', gender: 'M'}
      this.addUser(user) // call vuex addUser
    }
  },
}
</script>

```

### actions

```javascript
export default new Vuex.store({
  // ~~ same as above mutions example
  actions: {
    addUser: ({commit}, payload) => {
      commit('addUser', payload)
    }
  }
})
```

```html
<h1> user length : {{$store.state.allUsers.length}} </h1>
<h1> user length : {{count}} </h1>
<h1> man length : {{mcount}} </h1>


<v-list-title v-for="(user, index) in users" :key="index">
  <div> {{ user }} </div>
</v-list-title>

<script>

import { mapGetters, mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters({count:'userCount', mcount:'manCount'}),
    ...mapState({users: 'allUsers'}), 
    // ...mapState(['allUsers']),
  },
  method: {
    ...mapMutations(['addUser']),
    signUp() {
      let user = {name: 'xman', gender: 'M'}
      this.$store.dispatch('addUser', user)
    }
  },
}
</script>

```

### mapActions


```html
<h1> user length : {{$store.state.allUsers.length}} </h1>
<h1> user length : {{count}} </h1>
<h1> man length : {{mcount}} </h1>


<v-list-title v-for="(user, index) in users" :key="index">
  <div> {{ user }} </div>
</v-list-title>

<script>

import { mapGetters, mapState, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({count:'userCount', mcount:'manCount'}),
    ...mapState({users: 'allUsers'}), 
    // ...mapState(['allUsers']),
  },
  method: {
    // ...mapMutations(['addUser']),
    ...mapActions(['addUser']),
    
    signUp() {
      let user = {name: 'xman', gender: 'M'}
      this.addUser(user)
    }
  },
}
</script>

```


