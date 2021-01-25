import { Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  zooname: {
    flex: 1,
    resizeMode: 'center',
  },
  ticketView: {
    flex: 6,
    backgroundColor: '#EDDFBC',
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
    backgroundColor: '#EDDFBC',
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
    backgroundColor: '#EDDFBC',
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
    color: '#363636',
    alignSelf: 'flex-start',
  },
  info: {
    fontWeight: '400',
    fontSize: 25,
    color: '#363636',
    alignSelf: 'center',
  },

  //Containers Styling ie buttons and inputs
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#67a2e5',
    width: '50%',
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'center',
    // width: '100%'
  },
  buttonText: {
    color: '#EAEAEA',
    fontSize: 20,
    fontWeight: '700',
  },
  inputText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#363636',
  },
  inputBox: {
    backgroundColor: 'white',
    borderRadius: 6,
    height: 30,
    padding: 10,
  },
  header: {
    flex: 1,
    backgroundColor: '#2C7B56',
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
    color: '#363636',
    alignSelf: 'center',
  },
});

export default styles;
