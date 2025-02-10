
export interface ILoginValues {
  identifier: string;
  password: string;
}

export interface IWhoAmI {
  id: number;
  role: string;
  name: string;
  email: string;
  phone: string;
  verified: boolean;
  phoneVerified: boolean;
  balance?: number;
  level: string;
  referralCode?: string;
  avatarId: number;
  telegramUserId: number | null;
  googleUserWithoutPassword: boolean;
}