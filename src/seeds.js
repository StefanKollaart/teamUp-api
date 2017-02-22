const feathers = require('feathers-client');
const authentication = require('feathers-authentication');
const rest = require('feathers-rest/client');
const superagent = require('superagent');
const host = 'http://localhost:3030';
const app = feathers()
  .configure(feathers.hooks())
  .configure(feathers.authentication({
    type: 'local'
  }))
  .configure(rest(host).superagent(superagent));


const userService = app.service('users');
const classDaysService = app.service('classDays');

const user = {
  name: 'Stefan Kollaart',
  email: 'stefankollaart@gmail.com',
  password: 'lalala1',
  admin: true,
}

const classDays = {
  pairs: [
    {}
  ]
}

userService.create(user)
  .then((result) => {
    console.log('User created');

    app.authenticate({
      type: 'local',
      email: user.email,
      password: user.password,
    }).then((result) => {
      classDaysService.create(Object.assign({}, classDays, {token:result.token} ))
        .then((result) => {
          console.log("classDay seeded...");
        }).catch((error) => {
          console.error("Error seeding classDay", error)
        });
      }).catch((error) => {
    console.error('Error authenticating!', error);
    });
  })
  .catch((error) => {
    console.error('Error creating user!', error);
  });
