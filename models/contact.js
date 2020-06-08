const getDb = require('../util/database').getDb;

class Contact {
    constructor(name, email, address, number) {
        this.name = name;
        this.email = email;
        this.address = address;
        this.number = number;
      }

    save() {
        const db = getDb();
        return db
          .collection('contacts')
          .insertOne(this)
          .then(result => {
            console.log(result);
          })
          .catch(err => {
            console.log(err);
          });
      }

      static fetchAll() {
        const db = getDb();
        return db
          .collection('contacts')
          .find()
          .toArray()
          .then(contacts => {
            console.log(contacts);
            return contacts;
          })
          .catch(err => {
            console.log(err);
          });
      }

}

module.exports = Contact;