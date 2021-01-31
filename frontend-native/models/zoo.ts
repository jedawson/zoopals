import { Exhibit } from './exhibit';
import { InventoryItem } from './inventoryItem';
import { Ticket } from './ticket';

export class Zoo {
  public exhibits: Exhibit[] = [];

  public profit = -1;

  public expenses = -1;

  public ticketsSold = -1;

  // public ticketsAvailable: Ticket[] = [];

  public inventoryItems: InventoryItem[] = [];
}
