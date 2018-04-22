import React, { Component } from 'react';
import { View, Text, StyleSheet, Button,TouchableOpacity } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import PopupDialog, {
    DialogTitle,
    DialogButton,
    SlideAnimation,
    ScaleAnimation,
    FadeAnimation,
  } from 'react-native-popup-dialog';

const slideAnimation = new SlideAnimation({ slideFrom: 'bottom' });
const scaleAnimation = new ScaleAnimation();
const fadeAnimation = new FadeAnimation({ animationDuration: 150 });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialogContentView: {
    flex: 1,
      backgroundColor: '#ffffff',
  },
  dialogButton: {
    marginTop:-50,
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',

      backgroundColor: '#ffffff',


  },
  Button: {
    alignItems: 'center',

    backgroundColor: 'purple',
    padding: 10,
    width: 100,

  },
  ButtonText: {
    color: 'white'

  },
  navigationBar: {
    borderBottomColor: '#b5b5b5',
    borderBottomWidth: 0.5,
    backgroundColor: '#ffffff',
  },
  navigationTitle: {
    padding: 10,
  },
  navigationButton: {
    padding: 10,
  },
  navigationLeftButton: {
    paddingLeft: 20,
    paddingRight: 40,
  },
  navigator: {
    flex: 1,
    // backgroundColor: '#000000',
  },
});

export default class FormContainer extends Component {
  state = {
    dialogShow: false,
  };



  showSlideAnimationDialog = () => {
    this.slideAnimationDialog.show();
  }

  render() {
    return (
      <Container>
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <TouchableOpacity style = {styles.Button}
            onPress={this.showSlideAnimationDialog}>
              <Text style={styles.ButtonText}>Info</Text>
            </TouchableOpacity>
        </View>


        <PopupDialog
          dialogTitle={<DialogTitle title="Popup Dialog - Slide Animation" />}
          ref={(popupDialog) => {
            this.slideAnimationDialog = popupDialog;
          }}
          dialogAnimation={slideAnimation}
        >
          <View style={styles.dialogContentView}>
          <Form>
            <Item fixedLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label>Password</Label>
              <Input />
                </Item>
              </Form>
              </View>
            <View style={styles.dialogButton}>
              <TouchableOpacity style = {styles.Button}
            onPress={this.showSlideAnimationDialog}>
                  <Text style={styles.ButtonText}>Info</Text>

            </TouchableOpacity>


          </View>
        </PopupDialog>
        </View>
        </Container>
    );
  }
}
