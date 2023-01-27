const {commandMapper} = require ('ebased/handler')

const inputMode = require('ebased/handler/input/eventTopic');
const outputMode = require('ebased/handler/output/batchEventConfirmation');

const createGift = require('../domain/createGift');

module.exports.handler = async (command, context) => {
    return commandMapper(
        {command, context},
        inputMode,
        createGift,
        outputMode
    );
};