import React from "react";
import SearchBar from "./SearchBar";
import api from "../data/api";
import VideoList from "./ListVideo";
import VideoDetail from "./VideoDetail";

export default class App extends React.Component {
  state = { videos: [], presentVideo: null };

  componentDidMount() {
    this.onTermSubmit("reactjs");
  }
  onTermSubmit = async term => {
    const response = await api.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({
      videos: response.data.items,
      presentVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ presentVideo: video });
  };
  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.presentVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
