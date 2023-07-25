const express = require('express')
const router = express.Router();
const videos = require('../../metadata')

// get the metadata of all videos

router.get('/videos', (req, res) => {
    res.json(videos);
});

router.get('/:id/metadata', (req, res) => {
    const id =req.params.id;
    res.json(videos.find(item => item.id == id));
});
    
module.exports = router;