export interface SingleTweetTypes {
  _id: string;
  createdAt: string;
  type: "tweet" | "reply" | "retweet";
  likes: string[];
  replies: string[] | Reply[];
  content: string;
  retweetUsers: string[];
  postedBy: PostedByTypes;
  retweetData?: retweetDataTypes;
  replyTo?: retweetDataTypes | string;
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

export interface SingleDetailTweet {
  _id: string;
  content: string;
  postedBy: PostedByTypes;
  retweetUsers: string[];
  createdAt: string;
  type: "tweet" | "reply" | "retweet";
  replies: Reply[];
  likes: any[];
}

export interface Reply {
  _id: string;
  content: string;
  type: "tweet" | "reply" | "retweet";
  postedBy: PostedByTypes;
  likes: any[];
  retweetUsers: any[];
  replies: Reply[];
  replyTo: string;
  createdAt: string;
}

export interface SearchResponseTypes {
  Tweets: any;
  users: PostedByTypes[];
}
