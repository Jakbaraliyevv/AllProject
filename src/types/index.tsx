export type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

export interface LoginType {
  email?: string;
  password?: string;
}

export interface VerifyType {
  code?: string;
}
