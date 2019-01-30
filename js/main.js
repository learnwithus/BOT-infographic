$(window).on('load', function() {
  console.log('ready');

  $("#menu .menu-header").click(function() {
    $("#menu").toggleClass('show');
  });

  // define objects containing the data for each site
  const vancouverData = {
    'surgeries': 31657,
    'births': 6122,
    'residentialCareClients': 6838,
    'psychiatricUnitAdmissions': 2333,
    'homeSupportClients': 7776,
    'homeSupportVisits': 1508601,
    'homeCareNursingVisits': 126734,
    'homeCareRehabVisits': 31077,
    'emergencyDepartmentVisits': 119435,
    'inpatientDays': 282812
  }

  const richmondData = {
    'surgeries': 9125,
    'births': 2089,
    'residentialCareClients': 1905,
    'psychiatricUnitAdmissions': 611,
    'homeSupportClients': 2031,
    'homeSupportVisits': 316350,
    'homeCareNursingVisits': 29276,
    'homeCareRehabVisits': 8620,
    'emergencyDepartmentVisits': 57676,
    'inpatientDays': 76243
  }

  const coastalData = {
    'surgeries': 23673,
    'births': 2256,
    'residentialCareClients': 4653,
    'psychiatricUnitAdmissions': 1013,
    'homeSupportClients': 2926,
    'homeSupportVisits': 587227,
    'homeCareNursingVisits': 51464,
    'homeCareRehabVisits': 11670,
    'emergencyDepartmentVisits': 141665,
    'inpatientDays': 119561
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
    countUps["psychiatric-unit-admissions-value"].update(data.psychiatricUnitAdmissions);
    countUps["residential-care-clients-value"].update(data.residentialCareClients);
    countUps["home-support-clients-value"].update(data.homeSupportClients);
    countUps["home-support-visits-value"].update(data.homeSupportVisits);
    countUps["home-care-nursing-visits-value"].update(data.homeCareNursingVisits);
    countUps["home-care-rehab-visits-value"].update(data.homeCareRehabVisits);
    countUps["emergency-department-visits-value"].update(data.emergencyDepartmentVisits);
  }

  // initialize the site with the Vancouver data
  switchData(vancouverData);

  // add click listeners to the site buttons
  $(".site-button").click( function() {
    let dataObject; // initialize a variable to hold the site's data

    // choose which data object to use for the counters
    switch($(this).data("site")) {
      case "vancouver":
        dataObject = vancouverData;
        $("#background-image-container").css('background-color', "#FF822E");
        $("#hospital-name").css('background-color', "#FF822E");
        break;
      case "richmond":
        dataObject = richmondData;
        $("#background-image-container").css('background-color', "#FFCF01");
        $("#hospital-name").css('background-color', "#FFCF01");
        break;
      case "coastal":
        dataObject = coastalData;
        $("#background-image-container").css('background-color', "#AED630");
        $("#hospital-name").css('background-color', "#AED630");
        break;
      default:
        break;
    }

    // switch the data in the counters to the decided dataset
    switchData(dataObject)
  });
});
