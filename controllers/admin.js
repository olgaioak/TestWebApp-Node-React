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
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getContacts = (req, res, next) => {
    Contact.find()
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

  
exports.deleteContact = (req, res, next) => {
    const contactId = req.params.contactId;
    Contact.findById(contactId)
      .then(contact => {
        return Contact.findByIdAndRemove(contactId);
      })
      .then(result =>{
        console.log(result);
        res.status(200).json({message:'Contact deleted!'});
      })
      .catch(err => {
        console.log(err);
      });
  };