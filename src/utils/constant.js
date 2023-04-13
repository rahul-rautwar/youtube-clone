const GOOGLE_API_KEY = "AIzaSyBcBcIM1ZjZZYdi9B-ntCQbmKqr9Jy_fIw";
export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;
export const YOUTUBE_SEARCH_SUGGEST_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const YOUTUBE_SEARCH_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" +
  GOOGLE_API_KEY;
export const LIVE_CHAT_COUNT = 25;
export const YOUTUBE_CATEGORIES =
  "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&hl=en_US&regionCode=IN&key=" +
  GOOGLE_API_KEY;
