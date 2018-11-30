
Event Delegation in JavaScript is an important optimization technique that we can use to make our websites
run faster when responding to user-events.
It saves us memory, and can help make our code simpler and easier to write and understand.
Capturing and bubbling allow us to implement one of most powerful event handling patterns called event delegation.
The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we
put a single handler on their common ancestor.
In the handler we get event.target, see where the event actually happened and handle it.

Event Delegation allows us to avoid adding event listeners to specific nodes; instead,
the event listener is added to one parent.That event listener analyzes bubbled events 
to find a match on child elements.

Event bubbling :
the event starts at the most specific node and flows outwards to the least specific one.
this is the default type of event flow with every wide browser support.

Event bubbling and capturing are two ways of event propagation in the HTML DOM API, when an
event occurs in an element inside another element, and both elements have registered a handle for that event.
The event propagation mode determines in which order the elements receive the event.
With bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements.


