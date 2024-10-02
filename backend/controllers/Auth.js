const express=require('express');
const userSchema=require('../models/User')
const router=express.Router();



// Register route
router.post('/register', async (req, res) => {
  const { email, password ,name,role} = req.body;

  // Simple validation
  if (!email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  try {
    // Check for existing user
    let user = await userSchema.findOne({ email });
    if (user) return res.status(400).json({ msg: 'User already exists' });

    // Create new user
    user = new userSchema({
        name,
      email,
      password,
      role // Plain text password
    });

    await user.save();
    res.json({ msg: 'User registered successfully' });
  } catch (err) {
    console.error(err);
   
    res.status(500).json({ msg: 'Server error' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Simple validation
  if (!email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  try {
    // Check for user
    const user = await userSchema.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'User does not exist' });

    // Check password
    if (user.password !== password) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Send user data
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});



router.get('/user/:id', async (req, res) => {
    try {
      const user = await userSchema.findById(req.params.id);
      if (!user) return res.status(404).json({ msg: 'User not found' });
  
      res.json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: 'Server error' });
    }
  });




// get all user database
  router.get('/',(req,res)=>{
    userSchema.find((err,data)=>{
        if(err)
            return err
        else
            return res.json(data)
    })
 })



  

module.exports = router;
