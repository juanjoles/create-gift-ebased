const {DownstreamEvent} = require('ebased/schema/downstreamEvent');

class GiftEvent extends DownstreamEvent {
    constructor(payload, meta){
        super({
            type:'GIFT.CREATED',
            specversion:'v1.0.0',
            payload,
            meta,
            schema:{
               resultGift:{type: String, required:true},
               status:{type:String, required: true}
            },
        })
    }
}

module.exports = {GiftEvent}