## vuex

- store.status : data
- store.getters : computed

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
  }
})
```

```html
<h1> user length : {{$store.state.allUsers.length}} </h1>
<h1> user length : {{$store.getters.userCount}} </h1>

<v-list-title v-for="(user, index) in $store.state.allUsers" :key="index">
</v-list-title>
```

## mapGetters

```html
<h1> user length : {{$store.state.allUsers.length}} </h1>
<h1> user length : {{userCount}} </h1>
<h1> man length : {{manCount}} </h1>


<script>

import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['userCount', 'manCount'])
  }
}
</script>

```

### mapGetters custom computed

```html
<h1> user length : {{$store.state.allUsers.length}} </h1>
<h1> user length : {{count}} </h1>
<h1> man length : {{mcount}} </h1>


<script>

import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({count:'userCount', mcount:'manCount'})
  }
}
</script>

```


### mapGetters and mapState 

```html
<h1> user length : {{$store.state.allUsers.length}} </h1>
<h1> user length : {{count}} </h1>
<h1> man length : {{mcount}} </h1>


<v-list-title v-for="(user, index) in users" :key="index">
  <div> {{ user }} </div>
</v-list-title>

<script>

import { mapGetters, mapState } from 'vuex'

export default {
  computed: {
    ...mapGetters({count:'userCount', mcount:'manCount'}),
    ...mapState({users: 'allUsers'}), 
    // ...mapState(['allUsers']),
  }
}
</script>

```

