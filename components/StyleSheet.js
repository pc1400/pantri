import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native'
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      // alignItems: 'center',
      // justifyContent: 'center',
      

      
      //margin: 16,
    },
    
    buttonPressed: {
      opacity: 0.5,
    },
    roundButton: {
      // position: 'center',
      // top: 10,
      // left: 0,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      paddingHorizontal: 30

    },
    scrollview: {
      width:Dimensions.get('window').width,
      borderRadius: 0,
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: Dimensions.get('window').height * .6,
      position: 'absolute',
      bottom: 90
      
    },
    scrollitem:{
      
      flexDirection: 'row',
      width:Dimensions.get('window').width * .85,
      fontSize: 25,
      padding:7,
      margin:5,
      backgroundColor: '#ffb265',
      borderRadius: 15,
    },
    scrolltext:{
      padding:7,
      fontSize: 25,
      
    },
    profilePic: {
      width: 100,
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 50,
      backgroundColor: 'gray',
    },
    settingsStyle: {
      width: 300,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 20,
      backgroundColor: '#ffb265',
    },
    containerProfile: {
      //flex: 2,
      backgroundColor: '#ebebeb',
      alignItems: 'center',
      fontSize: 20,
      fontWeight: "bold"
      //justifyContent: 'center',
      //padding: 100,
    },
    titleText: {
      fontSize: 20,
      fontWeight: "bold"
    },
    space: {
      width: 25,
      height: 25,
    },
    Extraspace: {
      width:20,
      height: 170,
    },
    space2: {
      width: 20,
      height: 55,
    },
    featuredStyle: {
      backgroundColor: '#ffb265',
      alignItems: 'center',
      width: 300,
      height: 200,
      borderRadius: 20,
      justifyContent: 'center',
    },
    containerHorizontal: {
      flex: 1,
      backgroundColor: '#ebebeb',
      flexDirection: 'row',
      alignItems: 'center',
      position: 'absolute',
      top: 80
      //justifyContent: 'center',
      //margin: 16,
    },
    containerSearch:{
      margin: 10,
      width: 270,
    },
    input: {

      backgroundColor: '#ebebeb',
      padding: 10,
      borderRadius: 10,
      color: "#000",
      borderWidth: 1,
    },
    menu: {
      flex: 1,
      flexDirection: 'row',
      position: 'absolute',
      justifyContent: 'center',
      bottom : 0,
      height: 60,
      width:Dimensions.get('window').width,
      // backgroundColor: '#F0F0F0',
      borderTopWidth: 2,
      borderColor: '#000000',
    
    },
    menubutton: {
      paddingHorizontal: 25,
      paddingVertical: 30,
      borderRadius:10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    tinyLogo: {
      width: 40,
      height: 40,
    },
    removebutton: {
      position: 'absolute',
      right: 3,
      padding: 10,
      borderRadius:10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    texto: {
      fontSize: 13
    },
    removeLogo: {
      width: 30,
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    containerSettings: {
      flex: 1,
      backgroundColor: '#ebebeb',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 110,
      
      //margin: 16,
    },
    logoText:{
      margin: 4,
      fontSize: 10,
      color: '#FFFFFF'
    },
    mainText:{
      margin: 1,
      fontSize: 40,
      color: '#087830',
      fontFamily: 'Helvetica',
      fontWeight: '100',
    },
    listscrollview: {
      flex: 1,
      flexDirection: 'row',
      width:Dimensions.get('window').width,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: Dimensions.get('window').height -20,
      
      
    },
    listscrollitem:{
      flex: 1,
      flexDirection: 'row',
      width:Dimensions.get('window').width * .85,
      fontSize: 25,
      padding:7,
      margin:5,
      backgroundColor: '#ffffff',
      borderRadius: 15,
      justifyContent: 'flex-start',
    },
    listscrolltext:{
      padding:7,
      fontSize: 25,
      alignItems: 'flex-start',
      width:Dimensions.get('window').width * .85 
  },
    containerMeals: {
      flex: 1,
      backgroundColor: '#ffffff',
      padding: 10,
      
      
      //margin: 16,
    },
    integratedstyling: {
      //flex: 1,
      backgroundColor:'#ffffff',
      alignItems: 'left',
      padding: 10,
      borderRadius: 20,
    },
    featuredButton: {
      width:Dimensions.get('window').width * .85,
      height: 70,
      justifyContent: 'center',
      alignItems: 'center',
      padding:7,
      fontSize: 25,
      borderRadius: 15,
      backgroundColor: '#ffb265',
    },
    saladButton: {
      width:Dimensions.get('window').width,
      height: 152,
      fontSize: 25,
      borderRadius: 0,
      borderWidth: 1,
      borderColor: '#E8E8E8',

    },
    menuImage: {
      width: 150, 
      height: 150, 
    },
    menuText: {
      paddingTop: 5,
      paddingBottom: 10,
      fontSize: 20,
      fontWeight: "bold",
      flexWrap: 'wrap'
    },
    menuSubText: {
      fontSize: 17,
      flexWrap: 'wrap'
    },
  });

  export {styles}