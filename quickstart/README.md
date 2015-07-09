## Create a project

```
npm install -g tsd
tsd install angular2 es6-promise rx rx-lite

touch app.ts index.html
```
## Run the TypeScript compiler

```
npm install -g typescript
tsc --watch -m commonjs -t es5 --emitDecoratorMetadata app.ts
```

## Run a local server

```
http-server
# or
python -m SimpleHTTPServer 8000
```
