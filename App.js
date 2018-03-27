/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */





import React, {Component} from 'react';
import {
  findNodeHandle,
  Button,
  FlatList,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity

} from 'react-native';
import ActionButton from 'react-native-action-button';
import CardView from 'react-native-cardview'
import CollapsibleToolbar from 'react-native-collapsible-toolbar';
import Modal from 'react-native-modalbox';
import SegmentedControlTab from 'react-native-segmented-control-tab'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

let data = [
  {mode: 'واریز', amount: '50000', description : 'درامد'},
  {mode: 'برداشت', amount: '50000', description : 'خرید'},
  {mode: 'واریز', amount: '50000', description : 'درامد'},
  {mode: 'برداشت', amount: '50000', description : 'خرید'},
  {mode: 'واریز', amount: '50000', description : 'درامد'},
  {mode: 'واریز', amount: '50000', description : 'درامد'},
  {mode: 'واریز', amount: '50000', description : 'درامد'},
  {mode: 'واریز', amount: '50000', description : 'درامد'},
  {mode: 'برداشت', amount: '50000', description : 'خرید'},
  {mode: 'واریز', amount: '50000', description : 'درامد'},
  {mode: 'برداشت', amount: '50000', description : 'خرید'},
  {mode: 'واریز', amount: '50000', description : 'درامد'},
  {mode: 'واریز', amount: '50000', description : 'درامد'},
  {mode: 'واریز', amount: '50000', description : 'درامد'},

]
let listeners = []

type Props = {};
export default class App extends Component<Props> {
  componentDidMount() {

    StatusBar.setBarStyle('light-content');

    if (Platform.OS === 'android') {
        StatusBar.setTranslucent(false);
        StatusBar.setBackgroundColor('#424242', true);
    }
console.disableYellowBox = true;
listeners.push(() => { this.setState({ data: data }) })

}
imageLoaded() {
  this.setState({ viewRef: findNodeHandle(this.backgroundImage) });
}
constructor(props) {
  super(props);
  this.state = { viewRef: null,
    selectedIndex: 0,

   };
   this.state = { data: Array.from(data) }


}
handleIndexChange = (index) => {
  this.setState({
    ...this.state,
    selectedIndex: index,
  });
}
renderContent = () => (
  <FlatList
    style = {{padding : 4}}
    data={this.state.data}
    renderItem={({item}) =>   <CardView
        style={styles.card}
                cardElevation={4}
                cardMaxElevation={2}
                cornerRadius={2}>
                <View
                  style={styles.cardHeader}
                  >
                  <Text
                    style={styles.cardHeaderText}
                    >
                      {item.mode}
                  </Text>
                </View>
                <View
                  style={styles.cardContent}
                  >
                    <View style={styles.cardContentParent}>
                    <View
                      style={styles.flexRow}

                       >
                         <Text style={styles.cardContentText}>
                           {item.amount}
 تومان
                         </Text>

                         <MaterialIcons name="attach-money" color="#fff" size={18}/>

                  </View>
                  <View
                    style={styles.flexRow}
                    >
                      <Text style={styles.cardContentText}>
                        {item.description}

                      </Text>

                      <MaterialIcons name="description" color="#fff" size={18}/>

                </View>
                </View>
                </View>
      </CardView>
}
  />
);

renderNavBar = () => (
    <View
        style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            flexDirection : 'row',
            margin : 0
        }}
    >
      <Text style={{ textAlign: 'center', color: '#FFF',fontSize:18,fontFamily:'font' }}>حسابداری خودمانی</Text>

    </View>


);
renderToolBar = () => (
  <View style={{height:300,paddingTop:125}}>
      <View style={styles.headerTextInputContainer}>
        <Text style={styles.headerTextInput}>100000 تومان</Text>
        <Text style={styles.headerTextInput}> مجموع دارایی شما :</Text>

    </View>
    <View style={styles.headerTextInputContainer}>
      <Text style={styles.headerTextInput}>150000 تومان</Text>
      <Text style={styles.headerTextInput}>  مجموع واریز شده ها :</Text>

  </View>
  <View style={styles.headerTextInputContainer}>
    <Text style={styles.headerTextInput}>50000 تومان</Text>
    <Text style={styles.headerTextInput}>   مجموع برداشت ها :</Text>

</View>
</View>


);

  render() {
    return (
<View           style={styles.absolute}

>
      <CollapsibleToolbar
          renderContent={this.renderContent}
          renderNavBar={this.renderNavBar}
          renderToolBar={this.renderToolBar}
backgroundColor = '#222222'
          collapsedNavBarBackgroundColor='#424242'
          translucentStatusBar
          showsVerticalScrollIndicator={false}
          toolBarHeight={300}
      >
</CollapsibleToolbar>

<ActionButton
  style={{margin:-16}}
  position = {'left'}
  buttonColor="rgba(231,76,60,1)"
  onPress={() => this.refs.modal6.open()}
/>


        <Modal style={[styles.modal, styles.modal4]} position={"bottom"} ref={"modal6"} swipeArea={20}>
          <SegmentedControlTab
    values={['واریز', 'برداشت']}
    tabTextStyle = {styles.SegmentControl}
    tabStyle = {styles.SegmentControlTabStyle}
    selectedIndex={this.state.selectedIndex}
    onTabPress={this.handleIndexChange}
    />
    <View style={styles.TextInputContainer}>
      <Text style={styles.modalEditTextLabel}>    تومان</Text>

          <TextInput style={styles.modalEditText} placeholder={'مبلغ'} ></TextInput>
          <MaterialIcons name="attach-money" color="#424242" size={18}/>

          </View>
          <View style={styles.TextInputContainer}>

          <TextInput style={styles.modalEditText} placeholder={'توضیحات'}></TextInput>
          <MaterialIcons name="description" color="#424242" size={18}/>

        </View>
          <TouchableOpacity style={styles.modalButton} onPress = {() =>this.refs.modal6.close()}
>
  <Text style={styles.cardContentText}>تایید</Text>

</TouchableOpacity>
        </Modal>
</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#424242',
    flexDirection : 'column'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  card: {
    width : '100%',
  },
  cardHeader: {
   height : 47,
    width : '100%',
    justifyContent: 'center',
    alignItems: 'center',

  },
  cardContent: {
    flex:1,
    backgroundColor : 'grey'
  },
  cardHeaderText: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'font',
  },headerTextInputContainer:{
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    height:42
  },headerTextInput:{
    fontFamily: 'font',
color:'#bdbdbd',
height:36
},flexRow:{
  flex:1,
  flexDirection : 'row',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',

},cardContentParent:{
  padding:16,

},cardContentText:{
  fontFamily: 'font',
color:'#fff'

},
  absolute: {
    position: "absolute",
    top: 0, left: 0, bottom: 0, right: 0,
  },modal:{
    padding:16,
    height:220
  },modalButton:{
    margin:4,
    height:42,
    backgroundColor:'#424242',
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 21,
    borderWidth: 0.5,
    borderColor: 'transparent',


  },modalEditText:{
    fontFamily: 'font',
    margin:4,
    flex:1
  },modalEditTextLabel:{
    fontFamily: 'font',
    margin:4,
    color:'#424242'
  },ContentView:{backgroundColor: 'lightgray',padding:8},
  SegmentControl:{  fontFamily: 'font',
},SegmentControlTabStyle:{  height:42,alignItems:'center',justifyContent:'center'

},TextInputContainer:{
  flex:1,
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center'
}
});
