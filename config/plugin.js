'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // 配置跨域插件
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  //引入egg-sequelize插件
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
};
