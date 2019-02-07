// require other js modules
requirejs(["data", "countup.min", "jquery.fittext"], function(data, CountUp) {

  $(window).on('load', function() {
    setTimeout(function() {
      console.log('daddy');
      // run fitText to make the hospital name responsive
      $("#hospital-name-container").fitText(0.205);

      // toggle the menu on click
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
            $("#hospital-colour").css('background-color', "#F15D3F");
            $("#hospital-name-container").css('background-color', "#F15D3F").text("VCH").fitText(0.205);
            break;
          case "vancouver":
            dataObject = vancouverData;
            $("#hospital-colour").css('background-color', "#FF822E");
            $("#hospital-name-container").css('background-color', "#FF822E").text("VANCOUVER").fitText(0.615);
            break;
          case "richmond":
            dataObject = richmondData;
            $("#hospital-colour").css('background-color', "#FFCF01");
            $("#hospital-name-container").css('background-color', "#FFCF01").text("RICHMOND").fitText(0.54);
            break;
          case "coastal":
            dataObject = coastalData;
            $("#hospital-colour").css('background-color', "#AED630");
            $("#hospital-name-container").css('background-color', "#AED630").text("COASTAL").fitText(0.44);
            break;
          case "north-vancouver":
            dataObject = northVancouverData;
            $("#hospital-colour").css('background-color', "#739849");
            $("#hospital-name-container").css('background-color', "#739849").text("NORTH VANCOUVER").fitText(0.65);
            break;
          case "squamish":
            dataObject = squamishData;
            $("#hospital-colour").css('background-color', "#44C8F5");
            $("#hospital-name-container").css('background-color', "#44C8F5").text("SQUAMISH").fitText(0.52);
            break;
          case "powell-river":
            dataObject = powellRiverData;
            $("#hospital-colour").css('background-color', "#0078AE");
            $("#hospital-name-container").css('background-color', "#0078AE").text("POWELL RIVER").fitText(0.52);
            break;
          case "sechelt":
            dataObject = secheltData;
            $("#hospital-colour").css('background-color', "#904799");
            $("#hospital-name-container").css('background-color', "#904799").text("SECHELT").fitText(0.42);
            break;
          case "whistler-pemberton":
            dataObject = whistlerPembertonData;
            $("#hospital-colour").css('background-color', "#F46EA5");
            $("#hospital-name-container").css('background-color', "#F46EA5").text("WHISTLER & PEMBERTON").fitText(0.6);
            break;
          default:
            break;
        }

        // switch the data in the counters to the decided dataset
        switchData(dataObject)
      }, 2500);
    });
  });
});
