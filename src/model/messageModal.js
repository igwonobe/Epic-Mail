import moment from 'moment';
import uuid from 'uuid';
class message {

     /**
   * class constructor
   * @param {object} data
   */
    constructor(){
        this.message =[];
    }
    composeMessage(data){
        const newMessage ={
            id: uuid.v4(),
            success: data.success || '',
            lowPoint: data.lowPoint || '',
            takeAway: data.takeAway || '',
            createDate: moment.now(),
            modifieddate: moment.now()
        };
        this.message.push(newMessage);
        return newMessage
    }
    getSingleMessage(id){
        return this.message.find(msg => msg.id ===id);
    }
    getAllMessage(){
        return this.message;
    }
    replyMessage(id, data){
        const message = this.getSingleMessage(id);
        const index = this.message.indexOf(message);
        this.reflection[index].success = data['success'] || message.success;
        this.reflection[index].lowPoint = data['lowPoint'] || message.lowPoint;
        this.reflection[index].takeAway = data['takeAway'] || message.takeAway;
        this.reflection[index].modifiedDate = moment.now()
        return this.reflection[index];
    }
    deleteMessage(id){
        const message = this.getSingleMessage(id);
        const index = this.message.indexOf(message);
        this.message.splice(index, 1);
        return{};
    }
}
export default new message();
