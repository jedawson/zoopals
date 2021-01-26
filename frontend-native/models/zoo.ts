import { Exhibit } from './exhibit';
import { InventoryItem } from './inventoryItem';
import { Ticket } from './ticket';

export class Zoo {
  public exhibits: Exhibit[] = [];

  public profit = 0;

  public expenses = 0;

  public ticketsAvailable: Ticket[] = [];

  public inventoryItems: InventoryItem[] = [];
}
