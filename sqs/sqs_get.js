var AWS = require("aws-sdk");
// Set the region
AWS.config.update({ region: "us-east-2" });
const ID = "AKIARSAGMFXHWCKG55XT";
const SECRET = "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";
AWS.config.update({ region: "us-east-2" });
AWS.config.update({
    accessKeyId: ID,
    secretAccessKey: SECRET,
});
// Create an SQS service object
var sqs = new AWS.SQS({ apiVersion: "2012-11-05" });
var queueURL =
    "https://sqs.us-east-2.amazonaws.com/107387563471/iot_series.fifo";
var params = {
    AttributeNames: ["SentTimestamp"],
    MaxNumberOfMessages: 10,
    MessageAttributeNames: ["All"],
    QueueUrl: queueURL,
    VisibilityTimeout: 20,
    WaitTimeSeconds: 0,
};
sqs.receiveMessage(params, function (err, data) {
    if (err) {
        console.log("Receive Error", err);
    } else if (data.Messages) {
        console.log(data);
        var deleteParams = {
            QueueUrl: queueURL,
            ReceiptHandle: data.Messages[0].ReceiptHandle,
        };
        sqs.deleteMessage(deleteParams, function (err, data) {
            if (err) {
                console.log("Delete Error", err);
            } else {
                console.log("Message Deleted", data);
            }
        });
    }
});
