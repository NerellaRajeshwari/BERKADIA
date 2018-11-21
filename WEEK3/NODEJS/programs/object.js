<!DOCTYPE html>
<html>
<body>

<h2>program to implement object creation</h2>
<p id="demo"></p>
<script>
// Create an object:
var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
       return this.firstName + " " + this.lastName + " " + this.id;
    }
};

// Display data from the object:
document.getElementById("demo").innerHTML = person.fullName();
</script>
</body>
</html>
