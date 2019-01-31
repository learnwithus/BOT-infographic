// require other js modules
requirejs(["data", "countup.min"], function(data, CountUp) {
  $(window).on('load', function() {
    console.log('ready');

    $("#menu .menu-header").click(function() {
      $("#menu").toggleClass('show');
    });

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
    switchData(allData);

    // add click listeners to the site buttons
    $(".site-button").click( function() {
      let dataObject; // initialize a variable to hold the site's data

      // choose which data object to use for the counters
      switch($(this).data("site")) {
        case "all":
          dataObject = allData;
          $("#background-image-container").css('background-color', "#FF822E");
          $("#hospital-name-container").css('background-color', "#FF822E").text("VCH").css('font-size', "2.45vw");
          break;
        case "vancouver":
          dataObject = vancouverData;
          $("#background-image-container").css('background-color', "#FF822E");
          $("#hospital-name-container").css('background-color', "#FF822E").text("VANCOUVER").css("font-size", "0.82vw");
          break;
        case "richmond":
          dataObject = richmondData;
          $("#background-image-container").css('background-color', "#FFCF01");
          $("#hospital-name-container").css('background-color', "#FFCF01");
          break;
        case "coastal":
          dataObject = coastalData;
          $("#background-image-container").css('background-color', "#AED630");
          $("#hospital-name-container").css('background-color', "#AED630");
          break;
        default:
          break;
      }

      // switch the data in the counters to the decided dataset
      switchData(dataObject)
    });
  });
});
