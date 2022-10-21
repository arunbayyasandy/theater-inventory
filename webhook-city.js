const CivicPlus = require("@oneblink/sdk/tenants/civicplus");

module.exports = async function (request, response) {

  const formId = request.body.formId;
  const submissionId = request.body.submissionId;
  const isDraft = request.body.isDraft;
  const options = {
    accessKey: process.env.FORMS_KEY,
    secretKey: process.env.FORMS_SECRET,
  };
 
  const forms = new CivicPlus.Forms(options);
  const result = await forms.getSubmissionData(formId, submissionId, isDraft);
  console.log("Result", result);
  let submission = result.submission;
  console.log("Event: " + submission.Theater_Events);
  try {
    console.log("submission: " + submission);
    console.log("submission size: " + submission.size);
    for(var i=0; i<=submission.length; i++) {
      console.log("Event name: " + submission[i]);
    }
  } catch(error) {
    console.log("Error while fetching form submission length: " + error);
  }
};

