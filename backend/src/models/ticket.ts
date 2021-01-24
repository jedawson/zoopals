export class SpecialEvent {

    public name = '';

    public dateTime = '';
    
}

export class Ticket {

    public price = 0;

    public ticketType = ''; // like child, student, adult, senior

    public specialEvent: SpecialEvent = new SpecialEvent();
    
}

