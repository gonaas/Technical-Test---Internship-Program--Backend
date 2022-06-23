const Permissions = require('../models/permissions');
const { ROLES } = require('../constants/user');
const { PERMISSIONS } = require('../constants/permissions');

const init = async () => {
  const permissionsAdministrative = new Permissions({
    roles: ROLES.ADMINISTRATIVE,
    permissions: [
      PERMISSIONS.USER_CREATE,
      PERMISSIONS.USER_UPDATE,
      PERMISSIONS.USER_LIST_FILTER,
      PERMISSIONS.USER_DELETE,
      PERMISSIONS.USER_LIST,
    ],
  });
  await permissionsAdministrative.save();

  const permissionsUser = new Permissions({
    roles: ROLES.USER,
    permissions: [
    ],
  });
  await permissionsUser.save();
};

module.exports = init;
