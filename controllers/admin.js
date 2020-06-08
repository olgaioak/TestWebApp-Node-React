const Contact = require('../models/contact');

exports.postAddContact = (req, res, next) => {
  const name = req.name;
  const email = req.email;
  const address = req.address;
  const number = req.number;
  const contact = new Contact(name, email, address, number);
  contact
    .save()
    .then(result => {
      // console.log(result);
      console.log('Created contact');
      res.redirect('/');
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getContacts = (req, res, next) => {
    Contact.fetchAll()
      .then(contacts => {
        res.json(200, {
          contacts: contacts,
          pageTitle: 'All Contacts',
          path: '/'
        });
      })
      .catch(err => {
        console.log(err);
      });
  };