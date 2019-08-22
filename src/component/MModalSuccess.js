import React, { Component } from 'react'
import { Text, View, Image} from 'react-native'
import MModal from './MModal'

export default class MModalSuccess extends Component {
  render() {
    return (
      <MModal visible={this.props.visible} style={{}} onClose={this.props.onClose}>
        <Image style={{alignSelf: "center"}} source={require("../assets/images/success.png")} />
        <Text style={{alignSelf: "center", marginVertical: 20, textAlign: "center"}}>{this.props.message}</Text>
      </MModal>
    )
  }
}
