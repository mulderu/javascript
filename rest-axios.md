## icanhazdadjoke

- https://icanhazdadjoke.com/api

- script
```javascript
async () {
  const config = {
    headers = {
      Accept: 'application/json'
    }
  }
  try {
    const res = await axios.get(`https://icanhazdadjoke.com/search`, config)
    console.log(res.data) 
    this.jokes = res.data.results
  } catch(err) {
    console.log(err)
  }
}
```

- curl test
```
$ curl -H "Accept: application/json" https://icanhazdadjoke.com/search
{
  "current_page": 1,
  "limit": 20,
  "next_page": 2,
  "previous_page": 1,
  "results": [
    {
      "id": "M7wPC5wPKBd",
      "joke": "Did you hear the one about the guy with the broken hearing aid? Neither did he."
    },
    {
      "id": "MRZ0LJtHQCd",
      "joke": "What do you call a fly without wings? A walk."
    },
    ...
    {
      "id": "usrcaMuszd",
      "joke": "What's the worst thing about ancient history class? The teachers tend to Babylon."
    }
  ],
  "search_term": "",
  "status": 200,
  "total_jokes": 307,
  "total_pages": 15
}
```
