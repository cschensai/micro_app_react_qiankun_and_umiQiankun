import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography } from 'antd';
import { Link, useModel} from 'umi';
import styles from './Welcome.less';

const CodePreview = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
      
    </code>
  </pre>
);

export default () => {
  const masterProps = useModel('@@qiankunStateFromMaster');
  const { userInfo = {} } = masterProps || {};
  return (
    <PageContainer>
      <Card>
         我是sub1
         <hr/>
         <h4>父级信息</h4>
         name: { userInfo.name }
         <br/>
         头像：<img width={80} src={userInfo.avatar} />
         <br/>
         <Link to="/list">列表</Link>
      </Card>
    </PageContainer>
  );
}
