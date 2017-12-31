import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import { Grid, Header, Image, Container } from 'semantic-ui-react'
import mePic from '../resources/profile.jpg'
import Socialbar from '../components/Socialbar'

export default class Index extends React.Component {
  render() {
    return (
      <div style={{background:'linear-gradient(to bottom right, orange, blue)', paddingTop:'8vh', height:'100%', width:'100%'}}>
        <Grid style={{marginTop:0, fontSize:'2rem'}}>
          <Grid.Row columns={1} centered>
              <Header size='large' style={{color:'white',}}>
                Hi, I'm Derek!
              </Header>
          </Grid.Row>
          <Grid.Row centered columns={1}>
            <Grid.Column className='textbox' style={{color:'white',}}>
              <p> I'm an 18 year old Software Engineering student at the University of Waterloo. I love to code and learn about coding. I enjoy making webistes, apps and games and I am also extremely fond of competitive programming! </p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Image rounded='true' src={mePic} height='350' centered/>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}