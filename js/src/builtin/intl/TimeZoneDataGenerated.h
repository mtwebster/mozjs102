// Generated by make_intl_data.py. DO NOT EDIT.
// tzdata version = 2021a

#ifndef builtin_intl_TimeZoneDataGenerated_h
#define builtin_intl_TimeZoneDataGenerated_h

namespace js {
namespace timezone {

// Format:
// "ZoneName" // ICU-Name [time zone file]
const char* const ianaZonesTreatedAsLinksByICU[] = {
    "Africa/Asmara", // Africa/Asmera [backzone]
    "Africa/Timbuktu", // Africa/Bamako [backzone]
    "America/Argentina/Buenos_Aires", // America/Buenos_Aires [southamerica]
    "America/Argentina/Catamarca", // America/Catamarca [southamerica]
    "America/Argentina/ComodRivadavia", // America/Catamarca [backzone]
    "America/Argentina/Cordoba", // America/Cordoba [southamerica]
    "America/Argentina/Jujuy", // America/Jujuy [southamerica]
    "America/Argentina/Mendoza", // America/Mendoza [southamerica]
    "America/Atikokan", // America/Coral_Harbour [northamerica]
    "America/Ensenada", // America/Tijuana [backzone]
    "America/Indiana/Indianapolis", // America/Indianapolis [northamerica]
    "America/Kentucky/Louisville", // America/Louisville [northamerica]
    "America/Nuuk", // America/Godthab [europe]
    "America/Rosario", // America/Cordoba [backzone]
    "Asia/Chongqing", // Asia/Shanghai [backzone]
    "Asia/Harbin", // Asia/Shanghai [backzone]
    "Asia/Ho_Chi_Minh", // Asia/Saigon [asia]
    "Asia/Kashgar", // Asia/Urumqi [backzone]
    "Asia/Kathmandu", // Asia/Katmandu [asia]
    "Asia/Kolkata", // Asia/Calcutta [asia]
    "Asia/Tel_Aviv", // Asia/Jerusalem [backzone]
    "Asia/Yangon", // Asia/Rangoon [asia]
    "Atlantic/Faroe", // Atlantic/Faeroe [europe]
    "Atlantic/Jan_Mayen", // Arctic/Longyearbyen [backzone]
    "EST", // Etc/GMT+5 [northamerica]
    "Europe/Belfast", // Europe/London [backzone]
    "Europe/Tiraspol", // Europe/Chisinau [backzone]
    "HST", // Etc/GMT+10 [northamerica]
    "MST", // Etc/GMT+7 [northamerica]
    "Pacific/Chuuk", // Pacific/Truk [australasia]
    "Pacific/Pohnpei", // Pacific/Ponape [australasia]
};

// Format:
// "LinkName", "Target" // ICU-Target [time zone file]
struct LinkAndTarget
{
    const char* const link;
    const char* const target;
};

const LinkAndTarget ianaLinksCanonicalizedDifferentlyByICU[] = {
    { "Africa/Asmera", "Africa/Asmara" }, // Africa/Asmera [backward]
    { "America/Buenos_Aires", "America/Argentina/Buenos_Aires" }, // America/Buenos_Aires [backward]
    { "America/Catamarca", "America/Argentina/Catamarca" }, // America/Catamarca [backward]
    { "America/Cordoba", "America/Argentina/Cordoba" }, // America/Cordoba [backward]
    { "America/Fort_Wayne", "America/Indiana/Indianapolis" }, // America/Indianapolis [backward]
    { "America/Godthab", "America/Nuuk" }, // America/Godthab [backward]
    { "America/Indianapolis", "America/Indiana/Indianapolis" }, // America/Indianapolis [backward]
    { "America/Jujuy", "America/Argentina/Jujuy" }, // America/Jujuy [backward]
    { "America/Kralendijk", "America/Curacao" }, // America/Kralendijk [southamerica]
    { "America/Louisville", "America/Kentucky/Louisville" }, // America/Louisville [backward]
    { "America/Lower_Princes", "America/Curacao" }, // America/Lower_Princes [southamerica]
    { "America/Marigot", "America/Port_of_Spain" }, // America/Marigot [southamerica]
    { "America/Mendoza", "America/Argentina/Mendoza" }, // America/Mendoza [backward]
    { "America/Santa_Isabel", "America/Tijuana" }, // America/Santa_Isabel [backward]
    { "America/St_Barthelemy", "America/Port_of_Spain" }, // America/St_Barthelemy [southamerica]
    { "America/Virgin", "America/Port_of_Spain" }, // America/St_Thomas [backward]
    { "Antarctica/South_Pole", "Antarctica/McMurdo" }, // Pacific/Auckland [backward]
    { "Arctic/Longyearbyen", "Europe/Oslo" }, // Arctic/Longyearbyen [europe]
    { "Asia/Calcutta", "Asia/Kolkata" }, // Asia/Calcutta [backward]
    { "Asia/Chungking", "Asia/Chongqing" }, // Asia/Shanghai [backward]
    { "Asia/Katmandu", "Asia/Kathmandu" }, // Asia/Katmandu [backward]
    { "Asia/Rangoon", "Asia/Yangon" }, // Asia/Rangoon [backward]
    { "Asia/Saigon", "Asia/Ho_Chi_Minh" }, // Asia/Saigon [backward]
    { "Atlantic/Faeroe", "Atlantic/Faroe" }, // Atlantic/Faeroe [backward]
    { "Europe/Bratislava", "Europe/Prague" }, // Europe/Bratislava [europe]
    { "Europe/Busingen", "Europe/Zurich" }, // Europe/Busingen [europe]
    { "Europe/Mariehamn", "Europe/Helsinki" }, // Europe/Mariehamn [europe]
    { "Europe/Podgorica", "Europe/Belgrade" }, // Europe/Podgorica [europe]
    { "Europe/San_Marino", "Europe/Rome" }, // Europe/San_Marino [europe]
    { "Europe/Vatican", "Europe/Rome" }, // Europe/Vatican [europe]
    { "Pacific/Ponape", "Pacific/Pohnpei" }, // Pacific/Ponape [backward]
    { "Pacific/Truk", "Pacific/Chuuk" }, // Pacific/Truk [backward]
    { "Pacific/Yap", "Pacific/Chuuk" }, // Pacific/Truk [backward]
    { "US/East-Indiana", "America/Indiana/Indianapolis" }, // America/Indianapolis [backward]
};

// Legacy ICU time zones, these are not valid IANA time zone names. We also
// disallow the old and deprecated System V time zones.
// https://ssl.icu-project.org/repos/icu/trunk/icu4c/source/tools/tzcode/icuzones
const char* const legacyICUTimeZones[] = {
    "ACT",
    "AET",
    "AGT",
    "ART",
    "AST",
    "BET",
    "BST",
    "CAT",
    "CNT",
    "CST",
    "CTT",
    "Canada/East-Saskatchewan",
    "EAT",
    "ECT",
    "IET",
    "IST",
    "JST",
    "MIT",
    "NET",
    "NST",
    "PLT",
    "PNT",
    "PRT",
    "PST",
    "SST",
    "US/Pacific-New",
    "VST",
    "SystemV/AST4",
    "SystemV/AST4ADT",
    "SystemV/CST6",
    "SystemV/CST6CDT",
    "SystemV/EST5",
    "SystemV/EST5EDT",
    "SystemV/HST10",
    "SystemV/MST7",
    "SystemV/MST7MDT",
    "SystemV/PST8",
    "SystemV/PST8PDT",
    "SystemV/YST9",
    "SystemV/YST9YDT",
};

} // namespace timezone
} // namespace js

#endif /* builtin_intl_TimeZoneDataGenerated_h */
