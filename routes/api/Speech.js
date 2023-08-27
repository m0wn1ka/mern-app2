const express = require('express');
const router = express.Router();
const data = require('../../config/default.json');
const secret = data.secret;

const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const { check, validationResult } = require('express-validator');
const Speech = require('../../models/Speech');

router.get('/', (req, res) => {
    res.send("get route from speech js");
});

router.post('/', [
    check('sayings', "Sayings are needed").not().isEmpty()
],
async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    console.log("req body is ",req.body)
    const {  token,sayings } = req.body;
    //getting user id
    const decoded = jwt.verify(token, secret);
    console.log(decoded); 
    console.log("id is",decoded.user.id)
    const user_id = await User.findById(decoded.user.id);

    console.log(user_id);
    // const {  user_id,sayings } = req.body;
    try {
        let user = await Speech.findById(user_id);

        if (user) {
            await Speech.updateOne(
                { _id: user_id },
                { $push: { sayings: sayings } }
            );
        } else {
            user = new Speech({
                _id: user_id,
                sayings: [sayings]
            });
        }

        await user.save();
        res.json(user);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
