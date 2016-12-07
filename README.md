# AppStore

[![Heroku](http://heroku-badge.herokuapp.com/?app=thawing-island-83120&svg=1&style=flat)](https://thawing-island-83120.herokuapp.com/)

### Overview

This application is a tiny App-store-like, using the following stack:
- Ruby on Rails as a backend API
- React / Redux as a frontend SPA
- Algolia's search API to retrieve the app-store's fake data

### Getting started

Before starting, the following dependencies are needed:
- Ruby 2.3.x, Rails 5.x
- NodeJS 6.0.x, NPM 3.10.x
- PostgreSQL 9.6.x

First of all, create a database `Algolia-AppStore_development`.
To start the project, simply clone the project and run the following commands:
```bash
$ bundle install
$ npm install
$ rake db:migrate
$ rake db:seed
```

Now that everything is ready, create a `config/local_env.yml` that contains your backend Algolia credentials, as follow:
```yml
ALGOLIA_APP_ID: 'xxxx'
ALGOLIA_API_KEY: 'xxxx'
```

And to start the local server, run:
```bash
$ rails s
```

Now, if you visit `localhost:3000`, your server must be available!

### Configure a local prod-like environment

This development workflow works fine, but you can follow the next steps to have a more convenient local environment.

First of all, install `nginx` on your system, and add the following config file:

```
# /usr/local/etc/nginx/servers/algolia.conf

server {
  listen 80;
  server_name app-store.local;
  location / {
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header Host $http_host;
    proxy_set_header X-NginX-Proxy true;
    proxy_pass       http://127.0.0.1:3000;
  }
}
```

Then, simply add the following line to your `/etc/hosts` file:
```
127.0.0.1 app-store.local
```

You're all set!
