'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller,io } = app;
  router.get('/', controller.home.index);
  //socket路由配置测试
  // io.of('/').route('test',io.controller.nsp.test)
  io.of('/').route('joinLive',io.controller.live.joinLive)
  io.of('/').route('leaveLive',io.controller.live.leaveLive)
  io.of('/').route('comment', io.controller.live.comment)
  io.of('/').route('gift', io.controller.live.gift)
  
  router.get('/test',controller.admin.test.page);
  // 用户注册
  router.post('/api/reg', controller.api.user.reg);
  // 用户登录
  router.post('/api/login', controller.api.user.login);
  // 创建直播间
  router.post('/api/live/create', controller.api.live.save);
  //退出登录
  router.post('/api/logout', controller.api.live.save);
   // 获取当前用户信息
  router.get('/api/user/info',controller.api.user.info)
  // 修改直播间状态
  router.post('/api/live/changestatus',controller.api.live.changeStatus)
  // 直播间列表
  router.get('/api/live/list/:page',controller.api.live.list)
  // 查看指定直播间
  router.get('/api/live/read/:id',controller.api.live.read) 
  router.get('/api/gift/list', controller.api.gift.list)
  //新增管理员
  router.get('/admin/manager/create',controller.admin.manager.create)
  router.post('/admin/manager',controller.admin.manager.save)
  //删除管理员路由配置
    router.get('/admin/manager/delete/:id', controller.admin.manager.delete)
	//管理员列表
	router.get('/admin/manager',controller.admin.manager.index)
};
