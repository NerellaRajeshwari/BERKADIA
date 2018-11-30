Process-based web serves: Apache, IIS.
Apache, IIS are used each request is processed in a separate thread / process - “process-based”.
Event-based web serves: Nginx, Node.js.

1.APACHE:

The Apache HTTP Server or simply goes by “Apache”, is open-source high-performance web server software developed and maintained by
a consortium of developers under the sponsorship of the Apache Software Foundation. It is a collaborative web server project designed to
create a robust, secure, and efficient commercial-grade web server in compliance with the current HTTP standards.

APACHE CONFIGURATION:
NameVirtualHost *:80

<VirtualHost *:80>
ServerName www.example.com
ServerAlias example.com *.example.com
DocumentRoot /data/www/example
</VirtualHost>

<VirtualHost *:80>
ServerName www.other-example.com
DocumentRoot /data/www/other-example
</VirtualHost>

2.NGINX:

They say one’s loss in another’s gain. This is exactly what happened. Apache’s mighty status has been hit by its potential rival,
Nginx. One of the first among the early contenders to receive a worldwide recognition, Nginx is also a solid web server platform
designed to serve modern web demands. Developed by Russian developer Igor Sysoev, Nginx is a free, open-source HTTP server which can also 
be used as a reverse proxy, mail proxy, and a generic TCP/UDP proxy server. It’s focused on serving a large number of concurrent users
efficiently and with minimal resources. At the time when handling a massive web traffic was quite impossible, Nginx came to the rescue.

NGNIX CONFIGURATION:

server {
    listen 80;
    server_name example.org www.example.org;
    root /data/www;

    location / {
        index index.html index.php;
    }

    location ~* \.(gif|jpg|png)$ {
        expires 30d;
    }
location ~ \.php$ {
        fastcgi_pass localhost:9000;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }
    
3.Apache vs. Nginx:

1.Apache follows multi-threaded approach to process client requests.	Nginx uses an event-driven approach to serve client requests.
2.It handles dynamic content within the web server itself.	It cannot process dynamic content natively.
3.It cannot process multiple requests concurrently with heavy web traffic.	It can process multiple client requests concurrently and efficiently with limited hardware resources.
4.Modules are dynamically loaded or unloaded making it more flexible.	The modules cannot be loaded dynamically. They must be compiled within the core software itself.
5.Apache is designed to be a web server.	Nginx is both a web server and a proxy server.
6.A single thread can only process one connection.	A single thread can handle multiple connections.


