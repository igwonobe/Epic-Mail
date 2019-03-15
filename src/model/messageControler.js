import messageModal from 'message';

const message = {

    composeMessage(req, res){
        if (!req.body.success && !req.body.lowPoint && !req.body.takeAway){
            return res.status(400).send({'messsage': 'Required'})
        }
        const message = 
    }
}