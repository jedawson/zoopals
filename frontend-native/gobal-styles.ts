import { Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

//Colors
const lightGray = '#EAEAEA';
const yellow = '#EDDFBC';
const darkGray = '#363636';
const blue = '#67a2e5';
const green = '#2C7B56';

const styles = StyleSheet.create({
  zooname: {
    flex: 1,
    resizeMode: 'center',
  },
  ticketView: {
    flex: 6,
    backgroundColor: yellow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ticket: {
    resizeMode: 'contain',
    width: width,
    height: height * 0.2,
  },
  ticketDetailView: {
    position: 'absolute',
    alignItems: 'center',
  },
  ticketDetail: {
    fontSize: 20,
    fontWeight: '500',
  },
  mapView: {},
  map: {
    resizeMode: 'contain',
    width: width,
    height: height * 0.35,
  },
  inventoryView: {},
  loginView: {
    flex: 6,
    backgroundColor: yellow,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  customerHomeView: {},
  myAnimalsView: {},
  profileView: {},
  staffView: {},
  staff: {
    fontWeight: '400',
    fontSize: 25,
    alignSelf: 'center',
  },
  purchaseTicketView: {
    flex: 6,
    backgroundColor: yellow,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  myTasksView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoView: {
    flex: 2,
    margin: 10,
  },
  infoTitle: {
    fontWeight: '700',
    fontSize: 25,
    color: darkGray,
    alignSelf: 'flex-start',
  },
  info: {
    fontWeight: '400',
    fontSize: 25,
    color: darkGray,
    alignSelf: 'center',
  },

  //Containers Styling ie buttons and inputs
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    backgroundColor: blue,
    width: '50%',
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'center',
    // width: '100%'
  },
  buttonText: {
    color: lightGray,
    fontSize: 20,
    fontWeight: '700',
  },
  inputText: {
    fontSize: 20,
    fontWeight: '500',
    color: darkGray,
  },
  inputBox: {
    backgroundColor: 'white',
    borderRadius: 6,
    height: 30,
    padding: 10,
  },
  header: {
    flex: 1,
    backgroundColor: green,
    justifyContent: 'center',
    alignContent: 'center',
  },
  titleView: {
    flex: 2,
    margin: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: darkGray,
    alignSelf: 'center',
  },
});

export default styles;
