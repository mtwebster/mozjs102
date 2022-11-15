// |reftest| skip-if(!this.hasOwnProperty("Intl"))

// Generated by make_intl_data.py. DO NOT EDIT.
// tzdata version = 2022f

const tzMapper = [
    x => x,
    x => x.toUpperCase(),
    x => x.toLowerCase(),
];

// This file was generated with historical, pre-1970 backzone information
// respected. Therefore, every zone key listed below points to a target
// in the backzone file and not to its modern-day target as IANA ignoring
// backzones would say.

// Backzone links derived from IANA Time Zone Database.
const links = {
    "Africa/Asmera": "Africa/Asmara",
    "America/Kralendijk": "America/Curacao",
    "America/Lower_Princes": "America/Curacao",
    "America/Marigot": "America/Port_of_Spain",
    "America/St_Barthelemy": "America/Port_of_Spain",
    "America/Virgin": "America/St_Thomas",
    "Antarctica/South_Pole": "Antarctica/McMurdo",
    "Arctic/Longyearbyen": "Europe/Oslo",
    "Asia/Chungking": "Asia/Chongqing",
    "Iceland": "Atlantic/Reykjavik",
    "Pacific/Ponape": "Pacific/Pohnpei",
    "Pacific/Truk": "Pacific/Chuuk",
    "Pacific/Yap": "Pacific/Chuuk",
};

for (let [linkName, target] of Object.entries(links)) {
    if (target === "Etc/UTC" || target === "Etc/GMT")
        target = "UTC";

    for (let map of tzMapper) {
        let dtf = new Intl.DateTimeFormat(undefined, {timeZone: map(linkName)});
        let resolvedTimeZone = dtf.resolvedOptions().timeZone;
        assertEq(resolvedTimeZone, target, `${linkName} -> ${target}`);
    }
}


if (typeof reportCompare === "function")
    reportCompare(0, 0, "ok");

