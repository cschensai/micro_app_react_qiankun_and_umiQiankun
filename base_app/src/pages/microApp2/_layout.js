import React, { useEffect } from 'react';
import { loadMicroApp } from 'qiankun';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

export default () => {
  useEffect(() => {
    const microApp = loadMicroApp(
      { name: 'app2', entry: '//localhost:7200', container: '#sub2box', props: { name: 'qiankun2' } },
    );
    return () => {
      microApp.unmount();
    }
  }, [])
  return (
    <PageHeaderWrapper title={false}>
      <div id="sub2box"></div>
    </PageHeaderWrapper>
  )
}