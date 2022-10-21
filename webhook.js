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
  let event = result.submission.Theater_Events;
  console.log("Event: " + event);
  processEventInventories(event);

  // try {
  //   const eventInventories = result.submission.Theater_Events + "_Inventories";
  //   console.log("Inventory : " + eventInventories);
  //   console.log("Event Inventory values: " + result.submission.BeautyAndTheBeastJr_Inventories);
  //   let inventories = result.submission.eventInventories;
  //   for(var i=0; i<=inventories.length; i++) {
  //     console.log("Event name: " + inventories[i].name);
  //   }
    
  // } catch(error) {
  //   console.log("Error while fetching form element: " + error);
  // }

  function processEventInventories(event) {
    let inventories;
    switch(event) {
      case "BeautyAndTheBeastJr":
        inventories = result.submission.BeautyAndTheBeastJr_Inventories;
        break;
      case "BalloonFestival":
        inventories = result.submission.BalloonFestival_Inventories;
        break;
      case "IndoorIceSkate":
        inventories = result.submission.IndoorIceSkate_Inventories;
        break;
      case "MusicNight":
        inventories = result.submission.MusicNight_Inventories;
        break;
      case "MusicFest":
        inventories = result.submission.MusicFest_Inventories;
        break;
      default:
        break;
    }
    console.log("Event Inventories: " + inventories);
  }
};

