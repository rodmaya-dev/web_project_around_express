export interface IUser {
  name: string;
  about: string;
  avatar: string;
  _id: string;
}

export interface ICard {
  name: string;
  link: string;
  _id: string;
  owner: IUser;
  likes: IUser[];
  createdAt: string;
}