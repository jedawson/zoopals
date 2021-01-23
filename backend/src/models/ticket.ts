export class SpecialEvent {

    public name = '';

    public dateTime = ''; // dateTime or timeFrame and dayOf?

    // public timeFrame = '';

    // public dayOf = '';
    
}

export class Ticket {

    public price = 0;

    public ticketType = ''; // like child, student, adult, senior

    public specialEvent: SpecialEvent = new SpecialEvent();
    
}

