import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./component/Nav";
import News from "./component/news";
import LoadingBar from "react-top-loading-bar";
export default class App extends Component {
  state = { progress: 0 };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <>
        <Router>
          <Nav />
          <LoadingBar
            color="#f11946"
            height={4}
            progress={this.state.progress}
          />
          <div className="container">
            <Routes>
              <Route
                exact
                path="/science"
                element={
                  <>
                    <h1 className="text-center">
                      Psg-News : Top Science Headlines
                    </h1>
                    <News
                      setProgress={this.setProgress}
                      key="science"
                      title="jhb"
                      country="in"
                      category="science"
                      description="HDHGTHFGHGV"
                    />
                  </>
                }
              />
              <Route
                exact
                path="/business"
                element={
                  <>
                    <h1 className="text-center">
                      Psg-News : Top Business Headlines
                    </h1>
                    <News
                      setProgress={this.setProgress}
                      key="business"
                      title="jhb"
                      country="in"
                      category="business"
                      description="HDHGTHFGHGV"
                    />
                  </>
                }
              />
              <Route
                exact
                path="/entertainment"
                element={
                  <>
                    <h1 className="text-center">
                      Psg-News : Top Entertainment Headlines
                    </h1>
                    <News
                      setProgress={this.setProgress}
                      key="entertainment"
                      title="jhb"
                      country="in"
                      category="entertainment"
                      description="HDHGTHFGHGV"
                    />
                  </>
                }
              />
              <Route
                exact
                path="/general"
                element={
                  <>
                    <h1 className="text-center">
                      Psg-News : Top General Headlines
                    </h1>
                    <News
                      setProgress={this.setProgress}
                      key="general"
                      title="jhb"
                      country="in"
                      category="general"
                      description="HDHGTHFGHGV"
                    />
                  </>
                }
              />
              <Route
                exact
                path="/"
                element={
                  <>
                    <h1 className="text-center">
                      Psg-News : Top General Headlines
                    </h1>
                    <News
                      setProgress={this.setProgress}
                      key="general"
                      title="jhb"
                      headlines="top-headlines"
                      country="in"
                      category="general"
                      description="HDHGTHFGHGV"
                    />
                  </>
                }
              />
              <Route
                exact
                path="/health"
                element={
                  <>
                    <h1 className="text-center">
                      Psg-News : Top Health Headlines
                    </h1>

                    <News
                      setProgress={this.setProgress}
                      key="health"
                      title="jhb"
                      country="in"
                      category="health"
                      description="HDHGTHFGHGV"
                    />
                  </>
                }
              />
              <Route
                exact
                path="/sports"
                element={
                  <>
                    <h1 className="text-center">
                      Psg-News : Top Sports Headlines
                    </h1>
                    <News
                      setProgress={this.setProgress}
                      key="sports"
                      title="jhb"
                      country="in"
                      category="sports"
                      description="HDHGTHFGHGV"
                    />
                  </>
                }
              />
              <Route
                exact
                path="/technology"
                element={
                  <>
                    <h1 className="text-center">
                      Psg-News : Top Technology Headlines
                    </h1>
                    <News
                      setProgress={this.setProgress}
                      key="technology"
                      title="jhb"
                      country="in"
                      category="technology"
                      description="HDHGTHFGHGV"
                    />
                  </>
                }
              />
            </Routes>
          </div>
        </Router>
       
      </>
    );
  }
}
