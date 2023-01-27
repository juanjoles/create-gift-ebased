const {CreateGiftValidation} = require('../schema/input/createGift');
const {GiftEvent} = require('../schema/event/cardGift');
const {emitCreateGift} = require('../service/emitCreateGift')

module.exports = async (eventPayload, commandMeta) => {
    new CreateGiftValidation (eventPayload,commandMeta);
    const resultGift = giftChoser(eventPayload.birthday) 
    const result = {resultGift, status:'Gift select'}
    await emitCreateGift(new GiftEvent(result,commandMeta) )
    return {body: result};

};

function giftChoser (birthday){
  const month = parseInt(birthday.split('-')[1]) 
  const day = parseInt(birthday.split('-')[2]) 
  
  let gift
  
  if(month >= 1 && month <= 3 ){
    if (month === 3 && day >= 21){
      gift = 'Buzo'
    } else {
      gift = 'Remera'
    }
  }
  
  if(month >= 4 && month <= 6 ){
    if (month === 6 && day >= 21){
      gift = 'Sweater'
    } else {
      gift = 'Buzo'
    }
  }
  
  if(month >= 7 && month <= 9 ){
    if (month === 9 && day >= 21){
      gift = 'Camisa'
    } else {
      gift = 'Sweater'
    }
  }
  
  if(month >= 10 && month <= 12 ){
    if (month === 12 && day >= 21){
      gift = 'Remera'
    } else {
      gift = 'Camisa'
    }
  }

  return gift
}