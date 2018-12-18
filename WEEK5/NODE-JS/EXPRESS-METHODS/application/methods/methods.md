app.all(path, callback [, callback ...]):

This method is like the standard app.METHOD() methods, except it matches all HTTP verbs.

app.delete(path, callback [, callback ...]):

Routes HTTP DELETE requests to the specified path with the specified callback functions.

app.disable(name):

Sets the Boolean setting name to false, where name is one of the properties from the app settings table. Calling app.set('foo', false) 
for a Boolean property is the same as calling app.disable('foo').

app.disabled(name):

Returns true if the Boolean setting name is disabled (false), where name is one of the properties from the app settings table.

app.enable(name):

Sets the Boolean setting name to true, where name is one of the properties from the app settings table. Calling app.set('foo', true) for
a Boolean property is the same as calling app.enable('foo').

app.enabled(name):

Returns true if the setting name is enabled (true), where name is one of the properties from the app settings table.

app.engine(ext, callback):

Registers the given template engine callback as ext. By default, Express will require() the engine based on the file extension.

app.get(name):

Returns the value of name app setting, where name is one of the strings in the app settings table.

app.get(path, callback [, callback ...]):

Routes HTTP GET requests to the specified path with the specified callback functions.

app.listen(path, [callback]):

Starts a UNIX socket and listens for connections on the given path.

app.listen([port[, host[, backlog]]][, callback]):

Binds and listens for connections on the specified host and port. This method is identical to Node’s http.Server.listen().
If port is omitted or is 0, the operating system will assign an arbitrary unused port, which is useful for cases like automated tasks
(tests, etc.).

app.METHOD(path, callback [, callback ...]):

Routes an HTTP request, where METHOD is the HTTP method of the request, such as GET, PUT, POST, and so on, in lowercase. Thus, the actual methods are
app.get(), app.post(), app.put(), and so on.

app.param([name], callback):

Add callback triggers to route parameters, where name is the name of the parameter or an array of them, and callback is the callback 
function. The parameters of the callback function are the request object, the response object, the next middleware, the value of the
parameter and the name of the parameter, in that order.

app.path():

Returns the canonical path of the app, a string.

app.post(path, callback [, callback ...]):

Routes HTTP POST requests to the specified path with the specified callback functions.

app.put(path, callback [, callback ...]):

Routes HTTP PUT requests to the specified path with the specified callback functions.

app.render(view, [locals], callback):

Returns the rendered HTML of a view via the callback function. It accepts an optional parameter that is an object containing local
variables for the view. It is like res.render(), except it cannot send the rendered view to the client on its own.

app.route(path):

Returns an instance of a single route, which you can then use to handle HTTP verbs with optional middleware. Use app.route() to 
avoid duplicate route names (and thus typo errors).

app.set(name, value):

Assigns setting name to value. You may store any value that you want, but certain names can be used to configure the behavior of the server. 
These special names are listed in the app settings table.

app.use([path,] callback [, callback...]):

Mounts the specified middleware function or functions at the specified path: the middleware function is executed when the base of 
the requested path matches path.
