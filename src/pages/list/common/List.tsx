import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import FullwidthImage from '../../../components/image/FullwidthImage';
import { loadListFrames } from '../../../redux/root_actions';
import Frames from '../../common/Frames';
import Header from './Header';

interface Props {
  onClick: any;
  filter: any;
}

const List: FC<Props> = (props: Props) => {
  // useSelector
  const loading = useSelector((state: any) => state.List.loading);
  const image = useSelector((state: any) => state.List.image);
  const bindData = useSelector((state: any) => state.List.bindData);

  //useDispatch
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(loadListFrames());
    }, 1000);
  }, []);

  return (
    <div>
      <FullwidthImage src={image} loading={loading} />
      <div className='mt-4'>
        <Row>
          <Col
            lg='3'
            md='3'
            sm='12'
            xs='12'
            style={{
              borderRight: '2px solid #ededed',
              // width: '20%',
              paddingRight: '0px',
            }}
            className='mb-4 custom-card pt-2'
          >
            {props.filter}
          </Col>
          <Col lg='9' md='9' sm='12' xs='12' className='p-0 m-0'>
            <Header />
            <div>
              <Frames
                onClick={props.onClick}
                frames={bindData}
                loading={loading}
                steps={6}
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default List;
