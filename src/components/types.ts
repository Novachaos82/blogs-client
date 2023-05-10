interface PostType {
  _id: string;
  title: string;
  date: Date;
  details: string;
  user_name: User;
  published: boolean;
}

interface User {
  _id: string;
  password: string;
  username: string;
}

interface commentType {
  comments: commentObject[];
}

interface commentObject {
  _id: string;
  comment: string;
  date: Date;
  postID: string;
  username: string;
}

interface decodedType {
  iat?: number;
  user?: userDecoded;
}

interface userDecoded {
  _id: string;
  username: string;
}
