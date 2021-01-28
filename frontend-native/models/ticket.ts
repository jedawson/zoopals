export class SpecialEvent {
  public name = '';
  public date = '';
  public time = '';
}

export class Ticket {
  public price = 0;

  public ticketType = ''; // like child, student, adult, senior

  // general admission, animal feeding, swim with dolphins, etc
  public specialEvent: SpecialEvent = new SpecialEvent();
}
