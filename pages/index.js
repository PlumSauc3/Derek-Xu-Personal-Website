import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import { Container, Header, Image } from 'semantic-ui-react'
import mePic from '../images/good2.png'

export default class Index extends React.Component {
  render() {
    return (
      <Container text>
        <Header as='h2'>
          Welcome!
        </Header>
        <p> Hi! I'm Derek, a 17 year old Software Engineering student at the University of Waterloo. I love to code and learn about coding. I love making projects such as games, webistes and apps but I especially love competitive programming! </p>
        <Image src={mePic} width={350} centered shape='circular' style={{marginTop:40}}/>
      </Container>
    )
  }
}
