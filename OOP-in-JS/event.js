class Event {
    constructor(name, description) {
      this.name = name;
      this.description = description;
      this.availableTickets = [];
    }
    addAvailableTickets(name, price) {
        this.availableTickets.push(name, price);
    }
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

// document.addEventListener('DOMContentLoaded', () => {
//     let html = '';
//     eventArray.forEach((item) => {
//         html += `<li>${item.name} - ${item.description}`;
//     });
//     document.querySelector('#event').innerHTML = html;
// });

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