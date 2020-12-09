export default interface User {
  id?: number;
  name: string;
  username: string;
  password: string;
  actived: boolean;
  is_admin: boolean;
  created_at: Date;
  updated_at: Date;
}
