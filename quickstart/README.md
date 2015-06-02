## Create a project

```
npm install -g tsd
tsd query angular2 --action install

touch app.ts index.html
```
## Run the TypeScript compiler

```
npm install -g typescrip
tsc --watch -m commonjs -t es5 --emitDecoratorMetadata app.ts
```

## Run a local server

```
http-server
# or
python -m SimpleHTTPServer 8000
```
