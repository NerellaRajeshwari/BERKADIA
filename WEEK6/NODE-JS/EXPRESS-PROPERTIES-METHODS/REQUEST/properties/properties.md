REQUEST METHODS AND PROPERTIES

1.req.params:

This property is an array containing properties mapped to the named route “parameters”. For example if you have the route /user/:name, then the “name” property is available to you as req.params.name. This object defaults to {}.

2.req.query:

This property is an object containing the parsed query-string, defaulting to {}.

3.req.body:

This property is an object containing the parsed request body. This feature is provided by the bodyParser() middleware, though other body parsing middleware may follow this convention as well. This property defaults to {} when bodyParser() is used.

4.req.files:

This property is an object of the files uploaded. This feature is provided by the bodyParser() middleware, though other body parsing middleware may follow this convention as well. This property defaults to {} when bodyParser() is used.

5.req.param(name):

Return the value of param name when present.

6.req.route:

The currently matched Route containing several properties such as the route’s original path string, the regexp generated, and so on.

7.req.cookies:

This object requires the cookieParser() middleware for use. It contains cookies sent by the user-agent. If no cookies are sent, it defaults to {}.

8.req.signedCookies:

This object requires the cookieParser(secret) middleware for use. It contains signed cookies sent by the user-agent, unsigned and ready for use. Signed cookies reside in a different object to show developer intent; otherwise, a malicious attack could be placed on req.cookie values (which are easy to spoof). Note that signing a cookie does not make it “hidden” or encrypted; this simply prevents tampering (because the secret used to sign is private). If no signed cookies are sent, it defaults to {}.

9.req.get(field):

Get the case-insensitive request header field. The “Referrer” and “Referer” fields are interchangeable.

10.req.accepts(types):

Check if the given types are acceptable, returning the best match when true, otherwise undefined - in which case you should respond with 406 “Not Acceptable”. The type value may be a single mime type string such as “application/json”, the extension name such as “json”, a comma-delimited list or an array. When a list or array is given the best match, if any is returned.

11.req.accepted:

Return an array of Accepted media types ordered from highest quality to lowest.

12.req.is(type):

Check if the incoming request contains the “Content-Type” header field, and it matches the give mime type.

13.req.ip:

Return the remote address, or when “trust proxy” is enabled - the upstream address.

14.req.ips:

When “trust proxy” is true, parse the “X-Forwarded-For” ip address list and return an array, otherwise an empty array is returned. For example if the value were “client, proxy1, proxy2” you would receive the array ["client", "proxy1", "proxy2"] where “proxy2” is the furthest down-stream.

15.req.path:

Returns the request URL pathname.

16.req.host:

Returns the hostname from the “Host” header field (void of portno).

17.req.fresh:

Check if the request is fresh - aka Last-Modified and/or the ETag still match, indicating that the resource is “fresh”.

18.req.stale:

Check if the request is stale - aka Last-Modified and/or the ETag do not match, indicating that the resource is “stale”.

19.req.xhr:

Check if the request was issued with the “X-Requested-With” header field set to “XMLHttpRequest” (jQuery etc).

20.req.protocol:

Return the protocol string “http” or “https” when requested with TLS. When the “trust proxy” setting is enabled the “X-Forwarded-Proto” header field will be trusted. If you’re running behind a reverse proxy that supplies https for you this may be enabled.

21.req.secure:

Check if a TLS connection is established. This is a short-hand for:

22.req.subdomains:

Return subdomains as an array.

23.req.originalUrl:

This property is much like req.url, however it retains the original request url, allowing you to rewrite req.url freely for internal routing purposes. For example the “mounting” feature of app.use() will rewrite req.url to strip the mount point.

24.req.acceptedLanguages:

Return an array of Accepted languages ordered from highest quality to lowest.

25.req.acceptedCharsets: Return an array of Accepted charsets ordered from highest quality to lowest.

26.req.acceptsCharset(charset): Check if the given charset are acceptable.

27.req.acceptsLanguage(lang): Check if the given lang are acceptable.
