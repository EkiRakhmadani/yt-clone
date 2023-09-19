import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "./reducers/auth.reducer.jsx";
import {
  homeVideosReducer,
  relatedVideoReducer,
  searchVideoReducer,
  selectedVideoReducer,
  subscriptionsChannelReducer,
  videosByChannelReducer,
} from "./reducers/videos.reducer.jsx";
import { channelDetailReducer } from "./reducers/channel.reducer.jsx";
import { commentListReducer } from "./reducers/comments.reducer.jsx";

const rootReducer = combineReducers({
  auth: authReducer,
  homeVideos: homeVideosReducer,
  selectedVideo: selectedVideoReducer,
  channelDetails: channelDetailReducer,
  commentList: commentListReducer,
  relatedVideos: relatedVideoReducer,
  searchedVideos: searchVideoReducer,
  subscriptionsChannel: subscriptionsChannelReducer,
  videosByChannel: videosByChannelReducer,
});

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
