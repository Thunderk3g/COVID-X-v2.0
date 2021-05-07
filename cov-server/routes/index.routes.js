var express = require('express');
var router = express.Router();
const Entry = require('../models/entrymodel');
const Contribute = require('../models/contributemodel');
const Help = require('../models/offerhelpmodel');
const User = require('../models/offerhelpmodel');
const controller = require("../controllers/auth.controller");
/* INSERT ENTRY */
router.post('/postEntry', 
  controller.postentry
);
/*Update Entry*/
router.put('/updateEntry', 
  controller.updateentry
);
/* Contribute Now */
router.post('/contributeHelp', 
  controller.contributenow
);

/*OFFER HELP*/
router.post('/offerHelp', 
    controller.offerhelp
);

/* SHOW ENTRIES */
router.get('/allentries',
    controller.getall
);

/* SHOW VERIFIED ENTRIES */
router.get('/verifiedentries',
      controller.getverified
);
module.exports = router;
