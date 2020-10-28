import React, { useEffect } from 'react';
import { loadMicroApp } from 'qiankun';
import { connect } from 'dva';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

const MicroApp1 = ({ currentUser }) => {
  useEffect(() => {
    const microApp = loadMicroApp(
      { name: 'app1', entry: '//localhost:7100', container: '#sub1box', props: { userInfo: currentUser } },
    );
    return () => {
      microApp.unmount();
    }
  }, [])
  return (
    <PageHeaderWrapper title={false}>
      <div id="sub1box"></div>
    </PageHeaderWrapper>
  )
}

export default connect(({ user }) => {
  return {
    currentUser: user.currentUser,
  }
})(MicroApp1)