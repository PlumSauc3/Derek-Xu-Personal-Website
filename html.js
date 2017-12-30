import React from "react"
import PropTypes from "prop-types"
import { Container } from 'semantic-ui-react'

const BUILD_TIME = new Date().getTime()

export default class HTML extends React.Component {
  static propTypes = {
    body: PropTypes.string,
  }

  render() {
    let css
    if (process.env.NODE_ENV === "production") {
      css = (
        <style
          dangerouslySetInnerHTML={{
            __html: require("!raw!../public/styles.css"),
          }}
        />
      )
    }

    return (
      <html lang="en">
        <head>
          <title>Derek Xu</title>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="author" content="Derek Xu" />
          <meta name="description" content="Derek Xu - Software Engineering student at uWaterloo" />
          <meta name="keywords" content="Derek, Xu, Software, Engineer, Waterloo, Music, Developer" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
          {css}
          <link href="https://fonts.googleapis.com/css?family=Dosis|Nunito|Quicksand" rel="stylesheet" /> 
        </head>
        <body style={{minHeight:'100%', height:'100%'}}>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
            style={{display:'flex', justifyContent:'center', height:'100%'}}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
