import { Card, Col, Row } from 'antd';
import { map } from 'lodash';
import React, { Fragment } from 'react';

export const ContentCountries = (props) => {
 const { data } = props;
 return (
  <Fragment>
   <Row gutter={[24, 24]}>
    {map(data, (item, idx) => (
     <Col xxl={4} xl={4} lg={4} md={4} sm={24} xs={24} key={idx}>
      <Card title={item?.name?.official} style={{ height: 200 }}>
       <img
        src={item?.flags?.svg ?? item?.flags?.png}
        alt={item?.name?.official}
        width="100%"
        height="100px"
       />
      </Card>
     </Col>
    ))}
   </Row>
  </Fragment>
 );
};
