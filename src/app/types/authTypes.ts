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

export interface SignupResponseTypes {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  profilePic: string;
  username: string;
  token: string;
}
