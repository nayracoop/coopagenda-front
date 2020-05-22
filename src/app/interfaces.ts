export interface Proposal {
  id: number;
  accepted?: boolean;
  details?: string;
  hosted_by: string;
  hosting_coop: string;
  title: string;
  user_id: number;
  slot_ids: Array<number>;
}
export interface Slot {
  id: number
  begin: Date;
  duration: number;
  user_id: number;
  proposals?: Array<Proposal>;
}
export interface User {
  id: number;
  admin?: boolean;
  avatar: string;
  email: string;
  provider: string;
  username: string;
}
