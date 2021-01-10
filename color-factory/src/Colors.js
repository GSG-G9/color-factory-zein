import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Colors extends React.Component {
  state = {
    name: "",
    rgb: null,
    colors: [],
  };

  AddColor = (props) => {
    const { name, rgb, colors } = this.state;
    const { history: {push}} = props;
    return (
      <>
        <form
          method="PUSH"
          action="/colors/new"
          onSubmit={() => {
            colors.push({ name, rgb });
            push("/colors");
          }}
        >
          <input type="text" value={name} onChange={this.colorNameHandle} />
          <input type="color" value={rgb} onChange={this.colorRgbHandle} />
          <input type="submit" />
        </form>
      </>
    );
  };

  Color = (props) => {
    const { colors } = this.state;

    const {
      history: { push },
      match: { params },
    } = props;

    colors.map(({ name, rgb }) => {
      return name === params ? (
        <div
          style={{
            backgroundColor: rgb,
            width: "100px",
            height: "100px",
          }}
        >
          <h1>this is {params}</h1>
          <h2>is it beautiful?</h2>
        </div>
      ) : (
        <div
          style={{
            backgroundColor: "white",
            width: "100%",
            height: "100%",
          }}
        >
          <h1>this is {params}</h1>
          <h2>is it beautiful?</h2>
          <h3
            onClick={() => {
              push("/colors");
            }}
          >
            Go Back
          </h3>
        </div>
      );
    });

    return <></>;
  };

  render() {
    const { colors } = this.state;
    return (
      <>
        <Router>
          <h2>Welcome to the Color Factory.</h2>
          <nav>
            <link to="/colors/new">Add new Color</link>
          </nav>
          {colors.map(({ name }) => {
            return <link to={`/colors/${name}`}>{colors.name}</link>;
          })}
          <Switch>
            <Route path="/colors/:color" render={()=>{
                <this.Color {...this.props} />
            }} />
            <Route path="/colors/new" render={()=>{
                <this.AddColor {...this.props} />
            }} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default Colors;
