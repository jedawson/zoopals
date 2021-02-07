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
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  /**
   *  CUSTOMER VIEW
   */
  // TICKETS
  ticketView: {
    flex: 7,
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
    marginTop: '1%',
    position: 'absolute',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'column',
  },
  ticketDetail: {
    marginTop: '5%',
    fontSize: 15,
    fontWeight: '500',
    alignSelf: 'center',
  },
  purchaseTicketView: {
    flex: 5,
    backgroundColor: yellow,
    fontSize: 25,
    justifyContent: 'center'
  },
  //EXHIBIT VIEW
  exhibitView: {
    flex: 7,
  },
  exhibitName: {
    backgroundColor: green,
    width: '60%',
    alignSelf: 'center',
  },
  exhibitHeaders: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: darkGray,
    alignSelf: 'center',
    width: '60%',
  },
  exhibitDetails: {
    fontSize: 20,
    fontWeight: '500',
    alignSelf: 'center',
    color: 'white',
    padding: 15
  },
  animalDetails: {
    fontSize: 20,
    fontWeight: '500',
    alignSelf: 'center',
    color: 'black',
    padding: 15
  },
  /*
   * ZOOKEEPER VIEW
   */
  cardView: {
    flex: 6,
    alignItems: 'center',
    backgroundColor: 'white',
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 50,
    borderRadius: 10,
    borderBottomWidth: 10,
    borderBottomColor: green,
    paddingTop: 50
  },
  /*
   * MANAGER VIEW
   */
  staffView: {
    flex: 6,
  },
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
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'center',
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
    backgroundColor: '#e3e3e3',
    borderRadius: 5,
    height: 50,
    padding: 10,
    margin: 10,
    borderBottomColor: green,
    borderBottomWidth: 5
  },
  header: {
    flex: 0.1,
    backgroundColor: green,
    justifyContent: 'center',
    alignContent: 'center',
  },
  titleView: {
    flex: 0.75,
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
  /* Styling for tables */
  horizontalFlexContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    padding: 5
   },
   tableHeaders: {
    color: '#FFFFFF',
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  tableItem: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  tableButton: {
    backgroundColor: '#67a2e5',
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    width: 20
  },
  globalButtonNoWidth: {
    backgroundColor: '#67a2e5',
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'center'
  },
});

export default styles;
