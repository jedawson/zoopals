import { Exhibit } from './exhibit';
import { InventoryItem } from './inventoryItem';

export class Zoo {
  public exhibits: Exhibit[] = [];

  public profit = -1;

  public expenses = -1;

  public ticketssold = -1;

  public inventoryItems: InventoryItem[] = [];

  public request = '';
  
}
