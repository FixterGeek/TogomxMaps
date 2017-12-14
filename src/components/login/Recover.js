import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {Button, Input, Item, Icon} from 'native-base';
import {Actions} from 'react-native-router-flux';
import img from '../../assets/imgs/recover.jpeg';
//Redux
import {connect} from 'react-redux';
import {emailChangedrec, vemailChangedrec, sendEmail} from '../../actions/recoverActions';

class Recover extends Component < {} > {
  onEmailRChange(text) {
    this.props.emailChangedrec(text);
  }

  onVemailChange(text){
    this.props.vemailChangedrec(text);
  }

  onButtonrPress() {
    const {recover} = this.props;
    console.log(recover)
    this.props.sendEmail({recover});
  }

  buttonCorreo() {
    console.log(this.props.recover)
    if (this.props.recover.emailrec === this.props.recover.veriemail) {
      return (
        <Item success style={styles.inputRounded}>
          <Input
            style={styles.color}
            placeholder='Correo electrónico'
            keyboardType='email-address'
            placeholderTextColor='#fff'
            returnKeyType='next'
            autoCapitalize='none'
            value={this.props.recover.veriemail}
            onChangeText={this.onVemailChange.bind(this)}/>
          <Icon name='checkmark-circle' style={styles.icon}/>
        </Item>
      );
    }

    return (
      <Item error style={styles.inputRounded}>
        <Input
          style={styles.color}
          placeholder='Confirme correo electrónico'
          keyboardType='email-address'
          placeholderTextColor='#fff'
          returnKeyType='next'
          autoCapitalize='none'
          value={this.props.recover.veriemail}
          onChangeText={this.onVemailChange.bind(this)}/>
        <Icon name='close-circle' style={styles.icon}/>
      </Item>
    );
  }

  render() {
    return (
      <ImageBackground source={img} style={styles.img}>
        <View style={styles.estiloImageB}>

          <View style={styles.view4}>
            <Icon name="ios-arrow-back" style={styles.icon2} onPress={() => Actions.pop()}/>
          </View>

          <View style={styles.view}>
            <Item style={styles.inputRounded}>
              <Input
                style={styles.color}
                placeholder='Correo electrónico'
                keyboardType='email-address'
                placeholderTextColor='#fff'
                returnKeyType='next'
                autoCapitalize='none'
                value={this.props.recover.emailChangedrec}
                onChangeText={this.onEmailRChange.bind(this)}/>
            </Item>

            {this.buttonCorreo()}

          </View>

          <View style={styles.content}>
            <Button block style={styles.button} onPress={this.onButtonrPress.bind(this)}>
              <Text style={styles.boton}>RECUPERAR CONTRASEÑA</Text>
            </Button>
          </View>
        </View>

      </ImageBackground>
    );
  }
}

const mapStateToProps = ({recover}) => {
  console.log(recover);
  return {recover};
};

const styles = StyleSheet.create({
  img: {
    justifyContent: 'flex-end',
    flex: 2,
    height: null,
    width: null
  },
  view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  boton: {
    color: 'white',
    fontWeight: 'bold'
  },
  button: {
    width: '78%',
    alignSelf: 'center',
    backgroundColor: 'orange'
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    margin: 15
  },
  icon: {
    marginRight: 10,
    color: 'orange'
  },
  icon2: {
    backgroundColor: 'transparent',
    color: 'orange',
    fontSize: 50
  },
  inputRounded: {
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10,
    borderColor: 'orange',
    borderWidth: 1.5
  },
  estiloImageB: {
    backgroundColor: 'rgba(0,0,0,.5)',
    height: '100%',
    width: '100%',
    justifyContent: 'center'
  },
  color: {
    color: 'white'
  },
  view4: {
    flex: 1,
    margin: 20
  }
});

export default connect(mapStateToProps, {emailChangedrec, vemailChangedrec, sendEmail})(Recover);
