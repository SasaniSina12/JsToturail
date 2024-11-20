 // local & global variable

let message = "Global Scope Variable";

function anyThing () {
    let message = "this is a global variable";
    console.log("This is a anyThing function scope variable (Global): ", message);
    function showMessage () {
        console.log("This is a showMessage function scope variable (Local, Global): ", message);
        function any () {
            let message = "this is a local variable";
            console.log("this is a any function scope variable(local): ",message)
        }
        any();
    }
    showMessage();
}
anyThing();
console.log("Global Scope:", message);


let scope = "scope0"
{
    let scope = "scope1"
    {
        let scope = "scope2"
        console.log(scope);
    }
}