const AWS = require('aws-sdk')
const s3 = new AWS.S3({signatureVersion: 'v4'})

exports.handler = async (event) => {
  //Fill in
}

exports.s3Handler = s3;