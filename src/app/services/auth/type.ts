import { ICompanyRes } from '../management/type';
import { PositionAttributes } from '../type';

//Login Types
export interface ILogin {
  phone: string;
}
export interface ILoginRes {
  status: boolean;
  message: string;
}

//Confirm Types
export interface IConfirm {
  phone: string;
  code: number;
}
export interface IConfirmRes {
  profile: IProfile;
  tokens: {
    refresh: string;
    access: string;
  };
}

//Profile Types
export interface IProfile {
  id: number;
  company: ICompanyRes;
  last_login: string;
  first_name: string;
  last_name: string;
  is_staff: boolean;
  date_joined: string;
  phone: string;
  avatar: string;
  position: PositionAttributes;
  main_store: number;
}
