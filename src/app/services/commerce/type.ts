import { DatePickerProps } from 'antd';
import { IRegion } from '../classifiers/type';
import { IBaseParams, IBaseRes, LotTypeAttributes } from '../type';
import { IContingentsRes, IEmployeeRes } from '../management/type';
import { ISourceRes } from '../finance/type';
import { type } from 'os';

///////////////////////////// Store /////////////////////////////

export interface IStore {
  name: string;
  is_main: boolean;
  region: number;
  comment: string;
}

export interface IStoreRes extends IBaseRes<Omit<IStore, 'region'>> {
  region: IRegion;
  products: IProductRes[];
  total_price: number;
}

export interface IStoreStat {
  id: number;
  ending_balance: number;
  expenses: number;
  income: number;
  name: string;
  previous_balance: number;
  transfers_in: number;
  month?: string;
}

export interface IStoreStatTable {
  key: string;
  ending_balance: string;
  expenses: string;
  income: string;
  name: string;
  previous_balance: string;
  transfers_in: string;
  month?: string;
}

///////////////////////////// Products //////////////////////////////

export type ProductTypeAttributes = 'raw' | 'tmz';

export interface IProduct {
  name: string;
  price: number;
  quantity: number;
  unit: string;
  store_id: number;
  type: ProductTypeAttributes;
  extra_unit?: string;
  comment: string;
  manufacturable?: boolean;
  extra_quantity?: number;
}

export interface IProductRes extends Omit<IBaseRes<IProduct>, 'store_id'> {
  store: IStoreRes;
}

/////////////// Basic tools ////////////////////////
export interface IBasicTool {
  name: string;
  date: string;
  price: number;
  amortization_percentage: number;
  remaining_price: number;
  invertal_number: number;
  responsible: number;
  comment: string;
}

export interface IBasicToolTable extends Omit<IBasicTool, 'date'> {
  date: DatePickerProps['value'];
}

export interface IBasicToolRes
  extends Omit<IBaseRes<IBasicTool>, 'remaining_price' | 'responsible'> {
  remaining_price: number;
  responsible: IEmployeeRes;
  is_reevaluated: boolean;
}

/////////////// Revaluate ////////////////////////
export interface IRevaluate {
  year: string;
  initial_value: number;
  amortization_value: number;
  amortization_residual_value: number;
  index: number;
  recalculation_value: number;
  recalculate_amortization_value: number;
  recalculate_amortization_residual: number;
  initial_recovery_value: number;
  annual_amortization_value: number;
  total_amortization: number;
  residual_value: number;
  amortization: number;
}

export interface IRevaluateTable extends Omit<IRevaluate, 'year'> {
  year: DatePickerProps['value'];
}

export interface IRevaluateRes extends IBaseRes<IRevaluate> {}

/////////////// Store transition /////////////////
export interface IStorageTransaction {
  quantity: number;
  comment: string;
  from_store: number;
  to_store: number;
  product_from_store: number;
}

export interface IStorageTransactionRes extends IBaseRes<IStorageTransaction> {
  product_to_store: number;
}

/////////////// Sales history /////////////////
export interface ISalesHistory {
  key: string;
  name: string;
  product: string;
  store_id: number;
  total_sales_amount: number;
  total_sales_quantity: number;
}

///////////////////////////// Production rolls /////////////////////////////

export interface IRoll {
  comment: string;
  entry_date: string;
  release_date?: string;
  pateria?: number;
  unit?: string;
  number?: number;
}

export interface IRollForm extends Omit<IRoll, 'entry_date' | 'release_date'> {
  entry_date: DatePickerProps['value'];
  release_date?: DatePickerProps['value'];
}

export interface IRollRes extends IBaseRes<IRoll> {
  products: IRollProductRes[];
}

export interface IRollProduct {
  product: number;
  amount: number;
}

export interface IRollProductRes
  extends IBaseRes<Omit<IRollProduct, 'product'>> {
  product: IProductRes;
}

export interface IRollProductFetch {
  roll: number;
  products: IRollProduct[];
}

export interface IRollProductFetchRes
  extends IBaseRes<Omit<IRollProduct, 'product'>> {
  products: IRollProductRes[];
}

///////////////////////////// Production transfer /////////////////////////////
export interface ITransferProduct {
  product_id: number;
  transfer_amount: number;
}
export interface ITransferProductAdd {
  products: ITransferProduct[];
}

export interface IAvilableProduct {
  product_id?: number;
  product_name: string;
  product_unit: string;
  total_available_amount: number;
  total_transferred_amount: number;
}

////////////////////////// Lot ////////////////////////////

export interface ILot {
  counterparty?: number;
  type: LotTypeAttributes;
  date: string;
  comment: string;
  employee: number;
  number?: number;
}

export interface ILotParams extends IBaseParams {
  type?: LotTypeAttributes;
  payment_type?: string;
}

export interface ILotForm extends Omit<ILot, 'date'> {
  date: DatePickerProps['value'];
}

export interface ILotRes
  extends Omit<IBaseRes<ILot>, 'employee' | 'counterparty'> {
  total_income: number;
  total_outcome: number;
  cost: number;
  products: ILotIncomeRes[];
  employee: IEmployeeRes;
  counterparty: IContingentsRes;
}

export interface ILotIncome {
  cost: number;
  total_cost?: number;
  cost_usd?: number;
  exchange_rate?: number;
  bank_cost?: number;
  facture?: string;
  quantity: number;
  lot: number;
  product?: number;
  amortization?: number;
  provider: number;
  comment?: string;
  currency?: string;
  invoice_number?: string;
  declaration_number?: string;
  container_number?: string;
  contract_number?: string;
  specification?: number;
  contract_date?: string;
  shipping?: 'railway' | 'air' | 'direct';
}

export interface ILotIncomeForm extends Omit<ILotIncome, 'contract_date'> {
  contract_date: DatePickerProps['value'];
  type?: string;
}

export interface ILotIncomeRes
  extends IBaseRes<Omit<ILotIncome, 'product' | 'provider' | 'amortization'>> {
  product: IProductRes;
  amortization: IBasicToolRes;
  provider: IContingentsRes;
}

export interface ILotOutcome {
  lot: number;
  price: number;
  date: string;
  contract_number?: string;
  dovernos: string;
  price_usd?: number;
  bank_cost?: number;
  exchange_rate?: number;
  outcome_type: number;
  comment?: string;
  payment_type?: string;
}

export interface ILotOutcomeForm extends Omit<ILotOutcome, 'date'> {
  date: DatePickerProps['value'];
  currency?: string;
}

export interface ILotOutcomeRes
  extends IBaseRes<Omit<ILotOutcome, 'provider' | 'outcome_type'>> {
  provider: IContingentsRes;
  outcome_type: ISourceRes;
}

export interface ILotIncomeOutcome {
  income?: ILotIncome[];
  outcome?: ILotOutcome[];
}

export interface ILotIncomeOutcomeRes {
  income?: ILotIncomeRes[];
  outcome?: ILotOutcomeRes[];
}

///// Storage sell /////////////

export interface IStorageSell {
  store: string;
  product: string;
  total_sales_quantity: number;
  total_sales_amount: number;
}
