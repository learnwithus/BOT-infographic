$(window).on('load', function() {
  console.log('ready');
  const vancouverData = {
    'surgeries': 87002,
    'births': 12591,
    'residentialCareClients': 17312,
    'homeSupportClients': 15305,
    'homeSupportVisits': 2951441,
    'homeCareNursingVisits': 2951441,
    'homeCareRehabVisits': 1234567,
    'emergencyDepartmentVisits': 460411,
    'inpatientDays': 596241
  }

  let countUps = {}; // an object to hold all the CountUp instances

  // iterate through the value elements and create a CountUp for them
  $(".info-box h3").each(function() {
    let id = this.id;
    countUps[id] = new CountUp(id, 0, 0, 0, 2.5);
  });

  // switch all the data to the data for the requested site
  function switchData(data) {
    countUps["surgeries-value"].update(data.surgeries);
    countUps["births-value"].update(data.births);
    countUps["inpatient-days-value"].update(data.inpatientDays);
    countUps["residential-care-clients-value"].update(data.residentialCareClients);
  }

  $(".site-button").click( function() {
    let dataObject;

    switch($(this).data("site")) {
      case "vancouver":
        dataObject = vancouverData;
        break;
      case "richmond":
        dataObject = richmondData;
        break;
      case "coastal":
        dataObject = coastalData;
        break;
      default:
        break;
    }

    switchData(dataObject)
  });
});
