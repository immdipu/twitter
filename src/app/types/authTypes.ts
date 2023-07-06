export interface loginInputTypes {
  username?: string;
  email?: string;
  password: string;
}

export interface loginResponseType {
  email: string;
  fistName: string;
  lastName: string;
  profilePic: string;
  token: string;
  username: string;
  id: string;
}
