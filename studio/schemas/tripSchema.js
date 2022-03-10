export const tripSchema = {
    name : 'trips',
    title : 'Trips', 
    type : 'document', 
    fields: [
        {
            name: 'droppff', 
            title : 'Drop off', 
            type : 'string'
        },
        {
            name: 'pickup', 
            title : 'Pick up', 
            type : 'string'
        },
        {
            name: 'rideCategory', 
            title : 'Ride category', 
            type : 'number'
        },
        {
            name: 'price', 
            title : 'Trip price', 
            type : 'number'
        },
        {
            name: 'rideTimestamp', 
            title : 'Trip Timestamo', 
            type : 'datetime'
        },
        {
            name: 'passenger', 
            title : 'Passenger', 
            type : 'reference', 
            to: [{ type: 'users' }],
        },
    ]
}