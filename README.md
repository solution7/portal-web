# web-portal

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install
```
# update Api server baseURL
## File path /src/utils/request.js

```
const service = axios.create({
    baseURL: add base api path
})
```

# serve with hot reload at localhost:8080
```
npm run dev
```
# build for production with minification
```
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
