import express from 'express';
import axios from 'axios';
import logger from '../log';

//import publicDir from '../constant';

const router = express.Router();

// /* GET users listing. */
// router.get('/login', function(req: any, res, next) {
//   // If I'm already logged in, why would I log in again?
//   if(req.session.user) {
//     console.log(req.session.user);
//     res.redirect('/');
//   }
//   res.sendFile('login.html', {root: publicDir});
// });

router.get('/', (req: any, res, next) => {
  let u = {...req.session.user};
  logger.debug(u);
  //delete u.password;
  if(u.name) {
    res.send(JSON.stringify(u));
  } else {
    res.sendStatus(401); // unauthorized
  }
});

// Much more restful
router.delete('/', (req, res, next) => {
  req.session.destroy((err) => logger.error(err));
  res.sendStatus(204);
})

const URI = 'https://8cf402b61d.execute-api.us-west-2.amazonaws.com/default/users/login'
async function login (username:string, password:string) {
  let res = await axios.post(URI, {username: String(username)})
  logger.debug(res)
  return res.data
}
router.post('/', function(req: any, res, next) {
  logger.debug(req.body);
  logger.debug(req.body.username)
  login(req.body.username, req.body.password).then((responseUser) => {
    if(responseUser === null || responseUser.password != req.body.password) {
      res.sendStatus(401);
    } 
    logger.debug(responseUser)
    req.session.user = responseUser;
    res.json(JSON.stringify(responseUser))
  }).catch((err) => {
    console.log(err)
  });
});

export default router;
