res.append():

Appends the specified value to the HTTP response header field. If the header is not already set, it creates the header with the
specified value. The value parameter can be a string or an array.

res.attachment():

Sets the HTTP response Content-Disposition header field to “attachment”. If a filename is given, then it sets the Content-Type based
on the extension name via res.type(), and sets the Content-Disposition “filename=” parameter.

res.cookie(name, value [, options]):

Sets cookie name to value. The value parameter may be a string or object converted to JSON.

res.clearCookie(name [, options]):

Clears the cookie specified by name. For details about the options object, see res.cookie().
example:
res.cookie('name', 'tobi', { path: '/admin' });
res.clearCookie('name', { path: '/admin' });

res.download(path [, filename] [, options] [, fn]):

Transfers the file at path as an “attachment”. Typically, browsers will prompt the user for download. By default, the
Content-Disposition header “filename=” parameter is path (this typically appears in the browser dialog). Override this
default with the filename parameter.


res.format(object):

Performs content-negotiation on the Accept HTTP header on the request object, when present. It uses req.accepts() to select a handler
for the request, based on the acceptable types ordered by their quality values. If the header is not specified, the first callback is 
invoked.
When no match is found, the server responds with 406 “Not Acceptable”, or invokes the default callback.
The Content-Type response header is set when a callback is selected. However, you may alter this within the callback using methods such as res.set() or res.type().


res.get(field):

Returns the HTTP response header specified by field. The match is case-insensitive.

res.json([body]):

Sends a JSON response. This method sends a response (with the correct content-type) that is the parameter converted to a JSON 
string using JSON.stringify().


res.jsonp([body]):
Sends a JSON response with JSONP support. This method is identical to res.json(), except that it opts-in to JSONP callback support.

res.links(links):

Joins the links provided as properties of the parameter to populate the response’s Link HTTP header field.


res.location(path):

Sets the response Location HTTP header to the specified path parameter.
A path value of “back” has a special meaning, it refers to the URL specified in the Referer header of the request. If the
Referer header was not specified, it refers to “/”.

res.redirect([status,] path):

Redirects to the URL derived from the specified path, with specified status, a positive integer that corresponds to an HTTP status code
If not specified, status defaults to “302 “Found”.

res.render(view [, locals] [, callback]):

Renders a view and sends the rendered HTML string to the client. Optional parameters:
locals, an object whose properties define local variables for the view.
callback, a callback function. If provided, the method returns both the possible error and rendered string, but does not perform an automated response. When an error occurs, the method invokes next(err) internally.
The view argument is a string that is the file path of the view file to render. This can be an absolute path, or a path relative to the views setting. If the path does not contain a file extension, then the view engine setting determines the file extension. If the path does contain a file extension, then Express will load the module for the specified template engine (via require()) and render it using the loaded module’s __express function.


res.send([body]):

Sends the HTTP response.

res.sendFile(path [, options] [, fn]):

Transfers the file at the given path. Sets the Content-Type response HTTP header field based on the filename’s extension.
Unless the root option is set in the options object, path must be an absolute path to the file.


res.sendStatus(statusCode):

Sets the response HTTP status code to statusCode and send its string representation as the response body.

res.set(field [, value]):

Sets the response’s HTTP header field to value. To set multiple fields at once, pass an object as the parameter.

res.status(code):

Sets the HTTP status for the response. It is a chainable alias of Node’s response.statusCode.

res.type(type)
Sets the Content-Type HTTP header to the MIME type as determined by mime.lookup() for the specified type.
If type contains the “/” character, then it sets the Content-Type to type.

res.vary(field):

Adds the field to the Vary response header, if it is not there already.
