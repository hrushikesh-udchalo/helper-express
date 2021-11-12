var AWS = require("aws-sdk");
// Set the region
const ID = "AKIARSAGMFXHWCKG55XT";
const SECRET = "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";
AWS.config.update({ region: "us-east-2" });
AWS.config.update({
    accessKeyId: ID,
    secretAccessKey: SECRET,
});
// Create an SQS service object
var sqs = new AWS.SQS({ apiVersion: "2012-11-05" });
var params = {
    // Remove DelaySeconds parameter and value for FIFO queues
    MessageAttributes: {
        Title: {
            DataType: "String",
            StringValue: "Rich Dad and Poor Dad",
        },
        Author: {
            DataType: "String",
            StringValue: "Jayesh Shinde",
        },
        WeeksOn: {
            DataType: "Number",
            StringValue: "10",
        },
    },
    MessageBody:
        "Information about current NY Times fiction bestseller for week of 12/11/2016. ndfndlkfsnk",
    // MessageDeduplicationId: "TheWhistler", // Required for FIFO queues
    MessageGroupId: "Group2", // Required for FIFO queues
    QueueUrl:
        "https://sqs.us-east-2.amazonaws.com/107387563471/iot_series.fifo",
};
sqs.sendMessage(params, function (err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Success", data.MessageId);
    }
});
