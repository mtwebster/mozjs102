// |reftest| skip-if(!this.hasOwnProperty("Intl"))

// Generated by make_intl_data.py. DO NOT EDIT.
// tzdata version = 2022b
const tzdata = "2022b";

if (typeof getICUOptions === "undefined") {
    var getICUOptions = SpecialPowers.Cu.getJSTestingFunctions().getICUOptions;
}

var options = getICUOptions();

assertEq(options.tzdata, tzdata);

if (typeof reportCompare === "function")
    reportCompare(0, 0, "ok");

