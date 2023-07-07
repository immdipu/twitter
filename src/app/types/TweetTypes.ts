export interface SingleTweetTypes {
  _id: string;
  createdAt: string;
  type: "tweet" | "reply" | "retweet";
  likes: string[];
  replies: string[];
  content: string;
  retweetUsers: string[];
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
  likes: string[];
  retweetUsers: string[];
  replies: string[];
  createdAt: string;
}

export interface TweetReplyTypes {
  content: string;
  replyTo: string;
}
