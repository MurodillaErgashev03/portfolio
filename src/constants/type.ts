import { Checkbox, GetProp } from 'antd';
import type { ColumnsType } from 'antd/es/table/interface';
export type IColumn<T> = ColumnsType<T>;
export type CheckboxValueType = GetProp<typeof Checkbox.Group, 'value'>[number];

export interface IOption {
  label: string;
  value: number | string;
}

export interface IMonthData<TData> {
  1: TData;
  2: TData;
  3: TData;
  4: TData;
  5: TData;
  6: TData;
  7: TData;
  8: TData;
  9: TData;
  10: TData;
  11: TData;
  12: TData;
}
