/*
  约定式路由文件配置
*/

import React from 'react';
import UserLayout from './UserLayout';
import BasicLayout from './BasicLayout';

export default ({ location: { pathname }, children }) => {
  // 用户页面
  if (pathname === '/user/login') {
    return <UserLayout>{children}</UserLayout>;
  }
  // 内容页面
  return <BasicLayout>{children}</BasicLayout>;
};
