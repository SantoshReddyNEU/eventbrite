import * as Images from '../images';
const Events = () => {
    var events = [
        {eventName: "Event 1", d: "An event is something that happens, especially when it is unusual or important. You can use events to describe all the things that are happening in a particular situation.", time: "8 PM", location: "Boston", price: "10"},
        {eventName: "Event 2", d: "An event is something that happens, especially when it is unusual or important. You can use events to describe all the things that are happening in a particular situation.", time: "12 AM", location: "Wrocester", price: "73"},
        {eventName: "Event 4", d: "An event is something that happens, especially when it is unusual or important. You can use events to describe all the things that are happening in a particular situation.", time: "1 PM", location: "Malden", price: "82"},
        {eventName: "Event 3", d: "An event is something that happens, especially when it is unusual or important. You can use events to describe all the things that are happening in a particular situation.", time: "5 AM", location: "Longwood", price: "12"},
        {eventName: "Event 5", d: "An event is something that happens, especially when it is unusual or important. You can use events to describe all the things that are happening in a particular situation.", time: "8:30 AM", location: "Park Street", price: "8"},
        {eventName: "Event 6", d: "An event is something that happens, especially when it is unusual or important. You can use events to describe all the things that are happening in a particular situation.", time: "6 PM", location: "Government Center", price: "52"},
        {eventName: "Event 7", d: "An event is something that happens, especially when it is unusual or important. You can use events to describe all the things that are happening in a particular situation.", time: "2 AM", location: "Heath Street", price: "99"},
        {eventName: "Event 8", d: "An event is something that happens, especially when it is unusual or important. You can use events to describe all the things that are happening in a particular situation.", time: "4 PM", location: "Oak Grive", price: "72"},
        {eventName: "Event 9", d: "An event is something that happens, especially when it is unusual or important. You can use events to describe all the things that are happening in a particular situation.", time: "1 PM", location: "Assembly", price: "26"},
        {eventName: "Event 10", d: "An event is something that happens, especially when it is unusual or important. You can use events to describe all the things that are happening in a particular situation.", time: "7 AM", location: "Forest Hill", price: "19"},
        {eventName: "Event 11", d: "An event is something that happens, especially when it is unusual or important. You can use events to describe all the things that are happening in a particular situation.", time: "5 PM", location: "New York", price: "82"},
        {eventName: "Event 12", d: "An event is something that happens, especially when it is unusual or important. You can use events to describe all the things that are happening in a particular situation.", time: "9 AM", location: "Wrentham", price: "0"}
    ]; 
    return ( 
        <div className='events'>
            <div className='events-container'>
                {events.map((event) => (
                    <section className='event'>
                    <div className='images'>
                        <img src={Images.Image1} className='image'/>
                    </div>
                    <h2>{event.eventName}</h2>
                    <p>{event.time}</p>
                    <p>{event.location}</p>
                    <p>Price: ${event.price}</p>
                </section>
                ))}
            </div>
        </div>
     );
}
 
export default Events;