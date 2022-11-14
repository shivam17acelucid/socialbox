const AccessControl = require("accesscontrol");
const ac = new AccessControl();
exports.roles = (function () {

  ac.grant("admin")
  .create("categorizedInfluencers")
  return ac;
})();
