# CSI Web Project(a.k.a Jirung World)
## Setup

Clone this repo:

``` shell
$ git clone 'https://github.com/SSHS-CSI/csi-web-proj.git'
```

Install all dependencies: 

``` shell
$ npm i
```

Put your mongodb credentials in the `.env` file:

``` shell
$ touch .env
$ echo "DB_USER=[Your DB user name]" >> .env
$ echo "DB_PW=[Your DB password]" >> .env
```

Now start the NodeJS process:

``` shell
$ node app/index.js
```

The NodeJS serves the endpoints at [localhost:8002](http://localhost:8002).
[NGINX](http://nginx.org) serves the static files and proxies request to the nodejs process.
An example configuration file for it is shown below.

``` nginx

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
        server localhost:8002;
    }

    server {
        listen       8080;
        server_name  localhost;

        charset utf-8;

        root [Direcrtory of the view file]/dist;
        
        location /endpoint {
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

``` shell
$ cd app/view
$ npm i
$ # If you didn't install parcel yet
$ npm i parcel -g
$ For production builds
$ parcel build index.html
$ # Or, if you want development builds with watching
$ parcel watch index.html
```

Turn on NGINX:

``` shell
$ nginx
```

Now, the site will be served at [localhost:8080](http://localhost:8080).
