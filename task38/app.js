var describe_city = function (city, country) {
    if (country === void 0) { country = 'Pakistan'; }
    console.log("".concat(city, " is in ").concat(country));
};
describe_city('karachi');
describe_city('Hyderabad');
describe_city('Delhi', 'India');
