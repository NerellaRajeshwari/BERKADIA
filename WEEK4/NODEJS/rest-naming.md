REST NAMING CONVENTOINS:

RESTful API ends up being simply a collection of URIs, HTTP calls to those URIs and some JSON and/or XML representations of resources, 
many of which will contain relational links. The RESTful principal of addressability is covered by the URIs.

POST:

To insert (create) a new customer in the system, we might use:
POST http://www.example.com/customers

GET:

To read a customer with Customer ID# 33245:
GET http://www.example.com/customers/33245 The same URI would be used for PUT and DELETE, to update and delete, respectively.
Here are proposed URIs for products:
POST http://www.example.com/products for creating a new product.

GET|PUT|DELETE :

http://www.example.com/products/66432
for reading, updating, deleting product 66432, respectively.

creating a new order for a customer? 
POST http://www.example.com/orders 
POST http://www.example.com/customers/33245/orders // we're creating an order for customer ID# 33245.

 the following would  return list of orders that customer #33245 has created or owns.:
GET :
http://www.example.com/customers/33245/orders
Probably a list of orders that customer #33245 has created or owns. 

To go one layer deeper in the hierarchy:

GET http://www.example.com/customers/33245/orders/8769/lineitems/1
Might return only the first line item in that same order.

EXAMPLES:

Let us consider rest webservice with an endpoint www.foobar.com/service.svc/MAC (migration authorisation code). Posting and getting to that adds and gets one MAC respectively.

GET www.example.com/service.svc/MAC - gets a list of all the MACs
GET www.example.com/service.svc/MAC?{property}={value} - search MACs by specified properties
POST www.example.com/service.svc/MAC - creates a new MAC
GET www.example.com/service.svc/MAC/{id} - gets the MAC with the specified id
PUT www.example.com/service.svc/MAC/{id} - updates the MAC with the specified id
DELETE www.example.com/service.svc/MAC/{id} - deletes the MAC with the specified id

DESCRIPTION:

PUT /MAC would replace the entire collection of MACs, DELETE /MAC would delete everything, and POST /MAC/{id} would create subitems in the MAC.

REST Resource Naming Guide:

1. A resource can be a singleton or a collection. For example, “customers” is a collection resource and “customer” is a singleton          resource (in a banking domain). We can identify “customers”
   collection resource using the URI “/customers”. We can identify a single “customer” resource using the URI “/customers/{customerId}”.

2. A resource may contain sub-collection resources also. For example, sub-collection resource “accounts” of a particular “customer” can be identified using the 
   URN “/customers/{customerId}/accounts” (in a banking domain). Similarly, a singleton resource “account” inside the sub-collection        resource “accounts” can be identified as follows: 
   “/customers/{customerId}/accounts/{accountId}”.

REST Resource Naming Best Practices
Use nouns to represent resources
RESTful URI should refer to a resource that is a thing (noun) instead of referring to an action (verb) because nouns have properties which verbs do not have – similar to resources have attributes. Some examples of a resource are:

Users of the system
User Accounts
Network Devices etc.

and their resource URIs can be designed as below:

http://api.example.com/device-management/managed-devices 
http://api.example.com/device-management/managed-devices/{device-id} 
http://api.example.com/user-management/users/
http://api.example.com/user-management/users/{id}


Resource archetypes into four categories document, collection, store and controller)and then we should always target to put a resource into one archetype and then use it’s naming 
convention consistently. 
 
1.document:

A document resource is a singular concept that is akin to an object instance or database record. In REST, you can view it as a single resource inside resource collection. 
A document’s state representation typically includes both fields with values and links to other related resources.

Use “singular” name to denote document resource archetype.

http://api.example.com/device-management/managed-devices/{device-id}
http://api.example.com/user-management/users/{id}
http://api.example.com/user-management/users/admin

2.collection:

A collection resource is a server-managed directory of resources. Clients may propose new resources to be added to a collection. However, it is up to the collection to choose to

Use “plural” name to denote collection resource archetype.

http://api.example.com/device-management/managed-devices
http://api.example.com/user-management/users
http://api.example.com/user-management/users/{id}/accounts

3.store:

A store is a client-managed resource repository. A store resource lets an API client put resources in, get them back out, and decide when to delete them. 
A store never generates new URIs. Instead, each stored resource has a URI that was chosen by a client when it was initially put into the store.

Use “plural” name to denote store resource archetype.

http://api.example.com/cart-management/users/{id}/carts
http://api.example.com/song-management/users/{id}/playlists

4.controller:

A controller resource models a procedural concept. Controller resources are like executable functions, with parameters and return values; inputs and outputs.

Use “verb” to denote controller archetype.

http://api.example.com/cart-management/users/{id}/cart/checkout
http://api.example.com/song-management/users/{id}/playlist/play

Consistency is the key:

1. Use forward slash (/) to indicate a hierarchical relationships:
    example:   http://api.example.com/device-management/managed-devices/{id}/scripts

2. Do not use trailing forward slash (/) in URIs:
    example:  http://api.example.com/device-management/managed-devices/

3. Use hyphens (-) to improve the readability of URIs:
    example:  http://api.example.com/inventory-management/managed-entities/{id}/install-script-location  //More readable
              http://api.example.com/inventory-management/managedEntities/{id}/installScriptLocation  //Less readable

4. Do not use underscores ( _ ):
    example: http://api.example.com/inventory-management/managed-entities/{id}/install-script-location  //More readable
             http://api.example.com/inventory_management/managed_entities/{id}/install_script_location  //More error prone

5.Use lowercase letters in URIs :
   example:  http://api.example.org/my-folder/my-doc  //1
             HTTP://API.EXAMPLE.ORG/my-folder/my-doc  //2
             http://api.example.org/My-Folder/my-doc  //3

6. Do not use file extenstions:
    example: http://api.example.com/device-management/managed-devices.xml  /*Do not use it*/
             http://api.example.com/device-management/managed-devices     /*This is correct URI*/

7. Never use CRUD function names in URIs:
    example: HTTP GET http://api.example.com/device-management/managed-devices  //Get all devices
             HTTP POST http://api.example.com/device-management/managed-devices  //Create new Device

8. Use query component to filter URI collection:
    example: http://api.example.com/device-management/managed-devices
             http://api.example.com/device-management/managed-devices?region=USA
             http://api.example.com/device-management/managed-devices?region=USA&brand=XYZ
