import { Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

//Colors
const lightGray = '#EAEAEA';
const yellow = '#EDDFBC';
const darkGray = '#363636';
const blue = '#67a2e5';
const green = '#2C7B56';

//Styles
const styles = StyleSheet.create({
  zooname: {
    flex: 1,
    resizeMode: 'center',
  },
  loginView: {
    flex: 6,
    backgroundColor: yellow,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  /**
   *  CUSTOMER VIEW
   */
  managerHomeView: {
    flex: 6,
    alignItems: 'center',
  },
  // TICKETS
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
  purchaseTicketView: {
    flex: 5,
    backgroundColor: yellow,
    fontSize: 25,
    justifyContent: 'center',
  },
  // MAP
  mapView: {},
  map: {
    resizeMode: 'contain',
    width: width,
    height: height * 0.35,
  },
  /*
   * ZOOKEEPER VIEW
   */
  inventoryView: {},
  myAnimalsView: {
    alignSelf: 'center',
    borderColor: 'green',
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  profileView: {
    flex: 6,
    justifyContent: 'flex-start',
  },
  myTasksView: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  /*
   * MANAGER VIEW
   */
  staffView: {},
  staff: {
    fontWeight: '400',
    fontSize: 25,
    alignSelf: 'center',
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
    borderRadius: 10,
    height: 50,
    padding: 10,
    margin: 10,
  },
  header: {
    flex: 0.1,
    backgroundColor: green,
    justifyContent: 'center',
    alignContent: 'center',
  },
  titleView: {
    flex: 1,
    margin: 20,
    backgroundColor: yellow,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: darkGray,
    alignSelf: 'center',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 30,
    alignSelf: 'center',
    backgroundColor: green,
    color: lightGray,
  },
  viewContainer: {
    backgroundColor: yellow,
    flex: 1,
    justifyContent: 'space-around',
  },
});

export default styles;
