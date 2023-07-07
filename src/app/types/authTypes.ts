export interface loginInputTypes {
  username?: string;
  email?: string;
  password: string;
}

export interface loginResponseType {
  email: string;
  firstName: string;
  lastName: string;
  profilePic: string;
  token: string;
  username: string;
  _id: string;
}
