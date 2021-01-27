import express from 'express';
import * as user from '../models/user';
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

const URI = ''
async function login (username, password) {
  return axios.post()
}
router.post('/', function(req: any, res, next) {
  logger.debug(req.body);
  login(req.body.name, req.body.password).then((user) => {
    if(user === null) {
      res.sendStatus(401);
    }
    req.session.user = user;
    res.send(JSON.stringify(user))
  });
});

export default router;
