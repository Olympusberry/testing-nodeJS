//airfreshener.js
const light = true;

let airFreshenerObject = {
    opening: false,
    airFreshener: true,
    battery: true
}

export function spray() {
    // Immediate check and spray if light is on
    if (light) {
        sprayNow();
    }

    // Set interval to spray every 10 seconds after the initial spray
    setInterval(() => {
        if (light) {
            sprayNow();
        }
    }, 10000); // Spray every 10 seconds
}

// Helper function for the spray action
function sprayNow() {
    if (airFreshenerObject.airFreshener && airFreshenerObject.battery) {
        airFreshenerObject.opening = true;
        console.log("Air Freshener sprayed");

        // Close the opening after spraying
        setTimeout(() => {
            airFreshenerObject.opening = false;
            console.log("Air Freshener closed");
        }, 1000); // Air freshener closes after 1 second

    } else if (!airFreshenerObject.airFreshener) {
        console.log("No Air Freshener. Please refill");
    } else if (!airFreshenerObject.battery) {
        console.log("Battery is bad. Please change them");
    }
}



//CONTENT
/* 
function spray() {
    setInterval(() => {
        if (light) {
            if (airFreshenerObject.airFreshener && airFreshenerObject.battery) {
                airFreshenerObject.opening = true;
                console.log("Air Freshener sprayed");

                //Close the opening after spraying
                setTimeout(() => {
                    airFreshenerObject.opening = false;
                    console.log("Air Freshener closed");
                }, 1000)//air freshener closes after 2 secs

            } else if (!airFreshenerObject.airFreshener) {
                console.log("No Air Freshener. Please refill");
            } else if (!airFreshenerObject.battery) {
                console.log("Battery is bad. Please change them");
            }
        }
    }, 10000);
}

//or

function spray() { 
    if (light) {
        if (airFreshenerObject.airFreshener && airFreshenerObject.battery) {
            airFreshenerObject.opening = true;
            console.log("Air Freshener sprayed");
    
            //Close the opening after spraying
            setTimeout(() => {
                airFreshenerObject.opening = false;
                console.log("Air Freshener closed");
            }, 1000)//air freshener closes after 2 secs
    
        } else if (!airFreshenerObject.airFreshener) {
            console.log("No Air Freshener. Please refill");
        } else if (!airFreshenerObject.battery) {
            console.log("Battery is bad. Please change them");
        }
    }
    setInterval(spray, 10000);
}


Between the two versions, the first implementation is preferable for managing the interval timing and controlling the spray function’s behavior. Here’s why:

Avoids Repeated Intervals: In the first version, setInterval is called once, and it repeatedly checks if it should spray based on the light status every 10 seconds. This keeps the code efficient, as setInterval doesn’t continuously stack up.

Self-contained Execution: In the second version, setInterval is placed within the spray function itself, meaning that each time the function runs, it starts a new interval, leading to multiple intervals piling up. This could cause performance issues and unintended multiple calls.

The first approach is thus more efficient and less prone to errors: */