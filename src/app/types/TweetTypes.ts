export interface SingleTweetTypes {
  _id: string;
  createdAt: string;
  type: "tweet" | "reply" | "retweet";
  likes: number;
  content: string;
  retweets: number;
  postedBy: PostedByTypes;
  retweetData?: retweetDataTypes;
  replyTo?: retweetDataTypes;
}

export interface PostedByTypes {
  _id: string;
  firstName: string;
  lastName: string;
  username: string;
  profilePic: string;
}

export interface retweetDataTypes {
  _id: string;
  content: string;
  postedBy: PostedByTypes;
}
