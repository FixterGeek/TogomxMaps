import React, {Component} from 'react';
import {Container, Content, List, ListItem, Text, Thumbnail, Body} from 'native-base';
import Footer from '../footer/Footer';

export default class ListExample extends Component {
  render() {
    return (
      <Container style={{
        backgroundColor: 'white'
      }}>
      <Content>
        <List>
          <ListItem>
            <Thumbnail square size={80} source={{
                uri: 'https://pbs.twimg.com/profile_images/916006979365040128/DcY8jSuo.jpg'
              }}/>
            <Body>
              <Text>Tienda 1</Text>
              <Text note="note">Its time to build a difference . .</Text>
            </Body>
          </ListItem>

          <ListItem>
            <Thumbnail square size={80} source={{
                uri: 'https://pbs.twimg.com/profile_images/916006979365040128/DcY8jSuo.jpg'
              }}/>
            <Body>
              <Text>Tienda 2</Text>
              <Text note="note">Its time to build a difference . .</Text>
            </Body>
          </ListItem>

          <ListItem>
            <Thumbnail square size={80} source={{
                uri: 'https://pbs.twimg.com/profile_images/916006979365040128/DcY8jSuo.jpg'
              }}/>
            <Body>
              <Text>Tienda 3</Text>
              <Text note="note">Its time to build a difference . .</Text>
            </Body>
          </ListItem>

          <ListItem>
            <Thumbnail square size={80} source={{
                uri: 'https://pbs.twimg.com/profile_images/916006979365040128/DcY8jSuo.jpg'
              }}/>
            <Body>
              <Text>Tienda 4</Text>
              <Text note="note">Its time to build a difference . .</Text>
            </Body>
          </ListItem>

          <ListItem>
            <Thumbnail square size={80} source={{
                uri: 'https://pbs.twimg.com/profile_images/916006979365040128/DcY8jSuo.jpg'
              }}/>
            <Body>
              <Text>Tienda 5</Text>
              <Text note="note">Its time to build a difference . .</Text>
            </Body>
          </ListItem>

          <ListItem>
            <Thumbnail square size={80} source={{
                uri: 'https://pbs.twimg.com/profile_images/916006979365040128/DcY8jSuo.jpg'
              }}/>
            <Body>
              <Text>Tienda 6</Text>
              <Text note="note">Its time to build a difference . .</Text>
            </Body>
          </ListItem>

          <ListItem>
            <Thumbnail square size={80} source={{
                uri: 'https://pbs.twimg.com/profile_images/916006979365040128/DcY8jSuo.jpg'
              }}/>
            <Body>
              <Text>Tienda 7</Text>
              <Text note="note">Its time to build a difference . .</Text>
            </Body>
          </ListItem>

          <ListItem>
            <Thumbnail square size={80} source={{
                uri: 'https://pbs.twimg.com/profile_images/916006979365040128/DcY8jSuo.jpg'
              }}/>
            <Body>
              <Text>Tienda 8</Text>
              <Text note="note">Its time to build a difference . .</Text>
            </Body>
          </ListItem>

          <ListItem>
            <Thumbnail square size={80} source={{
                uri: 'https://pbs.twimg.com/profile_images/916006979365040128/DcY8jSuo.jpg'
              }}/>
            <Body>
              <Text>Tienda 9</Text>
              <Text note="note">Its time to build a difference . .</Text>
            </Body>
          </ListItem>
        </List>
      </Content>
      <Footer/>
    </Container>
  );
  }
}
