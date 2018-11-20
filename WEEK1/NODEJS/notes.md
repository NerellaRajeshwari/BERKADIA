1.CHROME:
 
Google Chrome is a web browser developed by Google in 2008. It is the world's most popular web browser today!
Chrome uses V8 engine to run the javascript programs.
Chrome uses code from Apple Inc.’s WebKit, the open-source rendering engine used in Apple’s Safari Web browser.

2.INTERNET BROWSER:

Internet explorer is build on component object model(COM) technology, each component consists of  a dynamic link library.
WinInet.dll is the protocol handler for HTTP, HTTPS and FTP. It handles all network communication over these protocols.
MSHTML.dll houses the Trident rendering engine introduced in Internet Explorer 4, which is responsible for displaying the pages on-screen and handling the Document Object Model of the web pages. It parses the HTML/CSS file and creates the internal DOMtree representation of it.   The DOM tree is further processed by a layout engine which then renders the internal representation on screen.
3.FIREFOX:
Firefox implements many web standards, including HTML4 (almost full HTML5), XML, XHTML, MathML, SVG 2 (partial), CSS (with extensions),  ECMAScript (JavaScript),  DOM,  XSLT,  XPath, and APNG (Animated PNG) images with alpha transparency.
Firefox also implements standards proposals created by the WHATWG such as client-side storage,and canvas element. These standards are implemented through the Gecko layout engine, and Spidermonkey JavaScript engine.


4.HTTP METHODS:

There are various http methods:

GET: The GET method is used to retrieve information from the given server using a given URI. Requests using GET should only retrieve data and should have no other effect on the data.
PUT: Replaces all current representations of the target resource with the uploaded content.                                                      
POST:A POST request is used to send data to the server, for example, customer information, file upload, etc. using HTML forms.
CONNECT:Establishes a tunnel to the server identified by a given URI.
DELETE:Removes all current representations of the target resource given by a URI.
OPTIONS:Describes the communication options for the target resource.
TRACE:Performs a message loop-back test along the path to the target  resource.
HEAD: Same as GET, but transfers the status line and header section only.
PATCH:The HTTP PATCH method is used for a partial update of an OSLC resource. Unlike the PUT method, the PATCH method does not delete any local resource properties that are not included in the request. The PATCH method must be specified by using the x-method-override header.


5.IDEMPOTENCY IN HTTP:

An idempotent HTTP method is a HTTP method that can be called many times without different outcomes. 
It would not matter if the method is called only once, or ten times over. 
The result should be the same. Again, this only applies to the result, not the resource itself. 
This still can be manipulated (like an update - time stamp, provided this information is not shared in the (current) resource representation.

6.CONTENT DELIVERY NETWORK:

A CDN (content delivery network), also called a content distribution network, is a group of geographically distributed and interconnected servers that provide cached internet content from a network location closest to a user to accelerate its delivery. 
The primary goal of a CDN is to improve web performance by reducing the time needed to transmit content and rich media to users' internet-connected devices.
Content delivery networks (CDN) are the transparent backbone of the Internet in charge of content delivery.


7.Different OS’s And Languages Used :

Windows: C++, kernel is in C
Mac: Objective C, kernel is in C (IO PnP subsystem is Embedded C++)
Linux: Most things are in C, many userland apps are in Python, KDE is all C++
Unix: C programming
Android : Java, C, C++
iOS7 : Objective C, Swift, C, C++

8.DIFFERENCE BETWEEN MEAN AND MERN:
MEAN: mongoDB express AngularJS NodeJS
The major benefit of using MEAN stack is that the complete coding is based on Javascript. This reduces the learning time required for a developer. 
MEAN stack is one such collection of technologies that has helped in reducing the development time to a great extent. 
MEAN stack also helps in fast MVP development and scalability. The MEAN stack provides an efficient platform for building scalable software products.
MERN: mongoDB express React NodeJS
The main highlight of the MERN stack is that it is a platform that gives enterprises and businesses the agility, performance and intelligence they need to drive their business forward.
It uses React. React is a JavaScript-based library which is used to build the powerful and attractive user interface; it has so many features which make to unique among other front-end libraries like Virtual DOM.

9.COMPILER AND INTERPRETER:
  Compiler:A compiler is a computer program that transforms code written in a high-level programming language into the machine code. 
It is a program which translates the human-readable code to a language a computer processor understands (binary 1 and 0 bits). 
The computer processes the machine code to perform the corresponding tasks.
Interpreter:An interpreter is a computer program, which coverts each high-level program statement into the machine code. 
This includes source code, pre-compiled code, and scripts. Both compiler and interpreters do the same job which is converting higher level programming language to machine code.  A compiler will convert the code into machine code (create an exe) before program run.
 Interpreters convert code into machine code when the program is run.


10.OPERATING SYSTEMS:
  RAM and ROM:
 RAM (Random Access Memory) is a fast accessible memory that stores data during its operation while ROM (Read Only Memory) stores permanent data that is used for its functions, such as the information for booting the computer.
 Thus, the key difference between RAM and ROM is in the way the data is stored in them; the storage in RAM is temporary whereas the storage in ROM is permanent.
 
PAGING:Paging is a memory management scheme that eliminates the need for contiguous allocation of physical memory. This scheme permits the physical address space of a process to be non – contiguous.

11.TIME COMPLEXITY AND SPACE COMPLEXITY:
SPACE COMPLEXITY:
The amount of memory used by the algorithm (including the input values to the algorithm) to execute and produce the result. The amount of space required for variables, execution and program instruction.
It is calculated as:
Auxiliary Space is the extra space or the temporary space used by the algorithm during it's execution.
Space Complexity = Auxiliary Space + Input space
TIME COMPLEXITY:
Time complexity of an algorithm signifies the total time required by the program to run till its completion.
The time complexity of algorithms is most commonly expressed using the big O notation. It's an asymptotic notation to represent the time complexity.
Types of notations:
1.Big Oh denotes "fewer than or the same as" <expression> iterations.
2.Big Omega denotes "more than or the same as" <expression> iterations.
3.Big Theta denotes "the same as" <expression> iterations.
4.Little Oh denotes "fewer than" <expression> iterations.
5.Little Omega denotes "more than" <expression> iterations
O() : notation is used for worst case.
Omega() : notation is used for best case.
Theta() : notation is used for average case.
12.SYNCHRONOUS VS ASYNCHRONOUS PROGRAMMING:
    Synchronous, or Synchronized means "connected", or "dependent" in some way. In other words, two synchronous tasks must be aware of one another, and one task must execute in some way that is dependent on the other, such as wait to start until the other task has completed.
Asynchronous means they are totally independent and neither one must consider the other in any way, either in initiation or in execution.
Synchronous languages: c
Asynchronous languages: java,ajax
Synchronous and Asynchronous language: node js
13.SINGLE THREAD AND MULTI THREADING:
Single thread:
 In java single thread means execution of only a single thread. We cannot perform many operations at time, only one operation can be performed at one time.
It blocks the users until the thread execution completes.     
Multithreading
In java is a process of executing multiple threads simultaneously.
A thread is a lightweight sub-process, the smallest unit of processing. Multiprocessing and multi threading, both are used to achieve multitasking.
Advantages of Java Multi threading:
1) It doesn't block the user because threads are independent and you can perform multiple operations at the same time.
2) You can perform many operations together, so it saves time.
3) Threads are independent, so it doesn't affect other threads if an exception occurs in a single thread

14.MULTI PROCESSING, TASKING AND PROGRAMMING:
Multiprocessing sometimes refers to executing multiple processes (programs) at the same time. This might be misleading because we have already introduced the term “multiprogramming” to describe that before.
Multitasking has the same meaning of multiprogramming but in a more general sense, as it refers to having multiple (programs, processes, tasks, threads) running at the same time. This term is used in modern operating systems when multiple tasks share a common processing resource (e.g., CPU and Memory). At any time the CPU is executing one task only while other tasks waiting their turn. The illusion of parallelism is achieved when the CPU is reassigned to another task (i.e. process or thread context switching).
In java is a process of executing multiple threads simultaneously.
A thread is a lightweight sub-process, the smallest unit of processing.Multiprocessing and multi threading, both are used to achieve multitasking.
15.WHAT IS NON BLOCKING I/O:
Imagine you have a server getting one client request per second. One in ten of these requests needs an IO operation that takes 12 seconds, the rest can be handled 'instantly'.

If your IO blocks, you can't handle the 'instant' requests whilst waiting for the IO so you end up with a longer and longer queue. With non-blocking IO you clear lots of these requests whilst waiting for the response.

You could achieve something similar by creating multiple threads but in some circumstances this affects performance more than non-blocking IO.
16.WHAT IS EVENT LOOP:
The Event Loop is a queue of callback functions. When an async function executes, the callback function is pushed into the queue. The JavaScript engine doesn't start processing the event loop until the code after an async function has executed.


17.LIBUV:
libuv (Unicorn Velociraptor Library) is a multi-platform C library that provides support for asynchronous I/O based on event loops.
In simple words, libuv is a library that allows your JavaScript code (via V8) to perform I/O, whether it is network, file etc. So from TCP level connectivity all the way to file/system ops are actually performed by the libuv library.
LibUv performs, maintains and manages all the io and events in the event pool.

18.V8 ENGINE:

V8 is the name of the JavaScript engine that powers Google Chrome. It’s the thing that takes our JavaScript and executes it while browsing with Chrome.
V8 provides the runtime environment in which JavaScript executes. The DOM, and the other Web Platform APIs are provided by the browser.
Other javascript engines:
Firefox has Spidermonkey
Safari has JavaScriptCore (also called Nitro)
Edge has Chakra

19. HTTP RESPONSE CODES:there are five types of response codes:

1xx: Informational
It means that request was received and the process is continuing.

2xx: Success
It means that action was successfully received, understood, and accepted.

3xx: Redirection
It says that further action must be taken in order to complete the request.

4xx: Client Error
It means the request contains incorrect syntax or cannot be fulfilled.

5xx: Server Error: the server failed to fulfill an apparently valid request.
