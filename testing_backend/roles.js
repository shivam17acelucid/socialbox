const AccessControl = require("accesscontrol");
const ac = new AccessControl();
exports.roles = (function () {
  ac.grant("user").readOwn("profile").updateOwn("profile");

  ac.grant("admin")
    .extend("customer")
    .readAny("profile")
    .readOwn("profile")
    .updateOwn("profile")
    .updateAny("profile")
    .deleteAny("profile")

    .createAny("profile");
  return ac;
})();
