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
  valparams: {
    enable: true,
    package: 'egg-valparams',
  },
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
  redis: {
    enable: true,
    package: 'egg-redis',
  },
  // 安装socket.io插件
   io:{
  	 enable:true,
  	 package:'egg-socket.io',
  	 
   }
};
