let eventSlot = document.getElementById('event');

let interval = setInterval(function() {
    if(document.readyState === 'complete') {
        clearInterval(interval);
       // done();

        let html = '';
        console.log("at beginning ", eventArray)
        eventArray.forEach((item) => {
            html += `<li>${item.name} - ${item.description} - ${item.allTickets()}`;
        });
        document.querySelector('#event').innerHTML = html;
    }    
}, 100);

class Event {
    constructor(name, description) {
      this.name = name;
      this.description = description;
      this.availableTickets = [];
    }
    addAvailableTickets(name, price) {
        this.availableTickets.push([name, price]);
    }
    allTickets() {
        let holder = "All tickets:";
        for (let i = 0; i < this.availableTickets.length; i++) {
            holder += ` ${i+1}. ${this.availableTickets[i][0]} ($${this.availableTickets[i][1]})`;
        };
        return holder;
    }
    // Not quite working right now, it's returning just no tickets so I think there is a syntax error that is there

    // searchTickets(minPrice, maxPrice) {
    //     let holder = "Eligible tickets:";
    //     let hasThings;
    //     for (let i = 0; i < this.availableTickets.length; i++) {
    //         let count = 1;
    //         if ((this.availableTickets[i][1]> minPrice) && (this.availableTickets[i][1]< maxPrice)) {
    //             holder += ` ${count}. ${this.availableTickets[i][0]} ($${this.availableTickets[i][1]})`;
    //             count++;
    //             hasThings++;
    //         }
    //     }
    //     if (hasThings.length > 0) {
    //         return holder;
    //     }
    //     return "No tickets available";
    // }
}
class TicketType {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
let eventObj1 = new Event ('KLOS Golden Gala', 'An evening with hollywood vampires');
let eventObj2 = new Event('Skillet & Sevendust', 'Victorious war tour');
let eventObj3 = new Event('Jenny Lewis', 'On the line tour 2019');
let eventArray = new Array();
eventArray.push(eventObj1, eventObj2, eventObj3);
console.log(eventArray)

eventObj1.addAvailableTickets("human", 299);
eventObj1.addAvailableTickets("vampire", 99);
eventObj2.addAvailableTickets("General Admission", 25);
eventObj2.addAvailableTickets("Floor Seating", 80);

eventObj3.addAvailableTickets("Orchestra", 300);
eventObj3.addAvailableTickets("Mezzanine", 200);
eventObj3.addAvailableTickets("Balcony", 100);
console.log(eventObj1.availableTickets);
console.log(eventObj2.availableTickets);
console.log(eventObj3.availableTickets);
console.log(eventObj1.allTickets())

//console.log(eventObj1.searchTickets(98, 300))


