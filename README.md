## Server setup
- access the VPS: ```ssh ubuntu@51.75.64.45 ```
- install ngninx
- generate certificates with openSSL
- set nginx up
- install node, npm, yarn 
- clone the repo
- add .env
- install everyting with yarn
- start the project
- compliment yourself for being awesome

### Files to modify
in /nginx/sites-available/default:  

```
server {
        listen 80 default_server;
        listen [::]:80 default_server;

        root /ifusco-api;
        index index.html index.js index.htm index.nginx-debian.html;

        server_name _;

        location / {
        proxy_pass http://127.0.0.1:8000/graphql;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
        }

}
```

for SSL in /nginx/conf.d create a file hulluporo_life.conf
```
server {

        listen 443;
        ssl on;
        ssl_certificate conf.d/hulluporo_chain.crt;
        ssl_certificate_key conf.d/hulluporo.key;

        root /ifusco-api;
        index index.html index.js index.htm index.nginx-debian.html;
        
        location / {
                proxy_pass http://localhost:8000/graphql;
        }
        server_name hulluporo.life;
}
```





