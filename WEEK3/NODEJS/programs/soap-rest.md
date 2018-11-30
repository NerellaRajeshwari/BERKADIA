SOAP:
SOAP stands for Simple Object Access Protocol. It is a XML-based protocol for accessing web services.
SOAP is a W3C recommendation for communication between two applications.
SOAP is XML based protocol. It is platform independent and language independent. By using SOAP, you will be able to interact with
other programming language applications.

Advantages of Soap Web Services:
WS Security: SOAP defines its own security known as WS Security.
Language and Platform independent: SOAP web services can be written in any programming language and executed in any platform.

Disadvantages of Soap Web Services
Slow: SOAP uses XML format that must be parsed to be read. It defines many standards that must be followed while developing the SOAP 
      applications. So it is slow and consumes more bandwidthand resource.
WSDL dependent: SOAP uses WSDL and doesn't have any other mechanism to discover the service.

EXAMPLE:
 
package org.arpit.javapostsforlearning.webservices;
 
public class HelloWorld {
 
 public String sayHelloWorld(String name)
 {
 return "Hello world from "+ name;
 }
}

REST:
REST stands for REpresentational State Transfer.
REST is an architectural style not a protocol.

Advantages of RESTful Web Services:
Fast: RESTful Web Services are fast because there is no strict specification like SOAP. It consumes less bandwidth and resource.
Language and Platform independent: RESTful web services can be written in any programming language and executed in any platform.
Can use SOAP: RESTful web services can use SOAP web services as the implementation.
Permits different data format: RESTful web service permits different data format such as Plain Text, HTML, XML and JSON.

Disadvantages of RESTful Web Services:
REST does not define too much standards like SOAP.

HTTP methods :
RESTful web services use HTTP protocol methods for the operations they perform.Methods are:
GET:It defines a reading access of the resource without side-effects.This operation is idempotent i.e.they can be applied multiple times without changing the result
PUT :  It is generally used for updating resouce.It must also be idempotent.
DELETE : It removes the resources. The operations are idempotent i.e. they can get repeated without leading to different results.
POST :It is used for creating a new resource. It is not idempotent.


