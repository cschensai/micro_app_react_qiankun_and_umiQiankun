import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography } from 'antd';
import { Link } from 'umi';
import styles from './Welcome.less';

const CodePreview = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

export default () => (
  <PageContainer>
    <Card>
       subadd @ant-design/pro-layout
       <Link to="/list">列表</Link>
    </Card>
  </PageContainer>
);
