$(window).on('load', function() {
  console.log('ready');

  // $(window).resize(function() {
  //   if ($("#infographic-container").height() > $("#background-image").height()) {
  //     console.log('window taller than it is wide');
  //     let backgroundHeight = $("#infographic-container").height();
  //     $("#smoke-svg-1").css("bottom", backgroundHeight / 2);
  //   }
  // });

  // define objects containing the data for each site
  const vancouverData = {
    'surgeries': 87002,
    'births': 12591,
    'residentialCareClients': 17312,
    'mentalHealthInpatientVisits': 55555,
    'homeSupportClients': 15305,
    'homeSupportVisits': 2951441,
    'homeCareNursingVisits': 128891,
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
    countUps["mental-health-inpatient-visits-value"].update(data.mentalHealthInpatientVisits);
    countUps["residential-care-clients-value"].update(data.residentialCareClients);
    countUps["home-support-clients-value"].update(data.homeSupportClients);
    countUps["home-support-visits-value"].update(data.homeSupportVisits);
    countUps["home-care-nursing-visits-value"].update(data.homeCareNursingVisits);
    countUps["home-care-rehab-visits-value"].update(data.homeCareRehabVisits);
    countUps["emergency-department-visits-value"].update(data.emergencyDepartmentVisits);
  }

  // add click listeners to the site buttons
  $(".site-button").click( function() {
    let dataObject; // initialize a variable to hold the site's data

    // choose which data object to use for the counters
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

    // switch the data in the counters to the decided dataset
    switchData(dataObject)
  });
});
