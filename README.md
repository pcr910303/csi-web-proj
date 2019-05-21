# CSI Web Project(a.k.a Jirung World)

## Setup

Clone this repo:

```shell
$ git clone 'https://github.com/SSHS-CSI/csi-web-proj.git'
```

Install all dependencies:

```shell
$ yarn install
```

Put your mongodb credentials in the `.env` file:

```shell
$ touch .env
$ echo "DB_USER=[Your DB user name]" >> .env
$ echo "DB_PW=[Your DB password]" >> .env
```

Now start the NodeJS process:

```shell
$ # plain node
$ node app/index.js
$ # with nodemon
$ nodemon --watch app app/index.js
$ # with pm2
$ pm2 start app/index.js --watch
```

If a PORT environment variable is not set, NodeJS serves the endpoints at [localhost:8000](http://localhost:8000). [NGINX](http://nginx.org) serves the static files and proxies request to the nodejs process.
An example configuration file for it is shown below.

```nginx

worker_processes  1;

events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    sendfile        on;
    keepalive_timeout  65;

    #gzip  on;

    upstream csi-api {
        server localhost:[PORT number(if no env vars, 8000)];
    }

    server {
        listen       8080;
        server_name  localhost;

        charset utf-8;

        root [Directory of repo]/app/view/dist;

        location ~ ^/(api|auth) {
            proxy_redirect off;
            proxy_http_version 1.1;
            proxy_pass http://csi-api;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
    }

    include servers/*;
}

```

Compile all of the static files:

```shell
$ cd app/view
$ yarn add
$ # If you didn't install parcel yet
$ yarn global add parcel-bundler
$ # For production builds
$ yarn run parcel:build
$ # Or, if you want development builds with watching
$ yarn run parcel:watch
```

Turn on NGINX:

```shell
$ nginx
```

Now, the site will be served at [localhost:8080](http://localhost:8080).

Quick check:

``` shell
$ curl localhost:8080/auth/login \
    --data '{"email":"luvtoyou@icloud.com","password":"luvtoyou"}' \
    --header 'Content-Type: application/json'
```
