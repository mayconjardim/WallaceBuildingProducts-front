import { Product } from './Product';

export interface Orders {
  id?: any;
  startDate?: string;
  endDate?: string;
  priority: string;
  status: string;
  clientName: string;
  clientAddress: string;
  headline: string;
  description: string;
  dispatcher: any;
  clientZip: string;
  clientCity: string;
  manager: any;
  nameDispatcher: string;
  nameManager: string;
  products: any[];
}
