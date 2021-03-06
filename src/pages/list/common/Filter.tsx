import { cloneDeep } from 'lodash';
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import Checkbox from '../../../components/checkbox/Checkbox';
import Collapsible from '../../../components/collapsible/Collapsible';
import SmallImage from '../../../components/image/SmallImage';
import {
  clearFilter,
  filterList,
  listBind,
  loadListFrames,
} from '../../../redux/root_actions';

interface Props {}

const Filter: FC<Props> = (props: Props) => {
  //useDispatch
  const dispatch = useDispatch();

  //useSelector
  const filterAttr = useSelector((state: any) => state.List.filterAttr) || {};
  const frames =
    cloneDeep(useSelector((state: any) => state.List.frames)) || [];

  const frameType = filterAttr.type || [];
  const frameShape = filterAttr.shape || [];
  const frameColor = filterAttr.color || [];
  const frameBrand = filterAttr.brand || [];
  const priceRange = filterAttr.price || [];
  const gender = filterAttr.gender || [];
  const frameSize = filterAttr.size || [];
  const frameWidth = filterAttr.width || [];

  useEffect(() => {
    const list: Array<any> = [];
    let variants: Array<any> = [];
    let noFiltersApplied = true;
    frames.forEach((frame: any) => {
      Object.keys(filterAttr).forEach((key: any) => {
        const attr = filterAttr[key];
        attr.forEach((item: any) => {
          if (item.selected) {
            noFiltersApplied = false;

            if (list.findIndex((row: any) => row._id === frame._id) === -1) {
              if (frame[key] && item.id === frame[key]) {
                list.push(frame);
              } else if (!frame[key]) {
                variants = [];
                frame.variants.forEach((sku: any) => {
                  if (sku[key] && sku[key] === item.id) {
                    variants.push(sku);
                  }
                });
                if (variants.length > 0) {
                  // frame.variants = variants;
                  list.unshift(frame);
                }
              }
            }
          }
        });
      });
    });
    if (noFiltersApplied) {
      dispatch(listBind(frames));
    } else {
      dispatch(listBind(list));
    }
  }, [filterAttr]);

  const handleFilter = (key: string, id: string) => {
    const attributes = cloneDeep(filterAttr);
    let attr = attributes[key] || [];
    const modified = attr.map((item: any) => {
      if (item.id === id) {
        item.selected = !item.selected;
      }
      return item;
    });
    attributes[key] = modified;
    dispatch(filterList(attributes));
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(loadListFrames());
    }, 1000);
  }, []);

  return (
    <Container fluid={true}>
      <div className='d-flex justify-content-between'>
        <p className='font-filter-title' style={{ marginLeft: '-8px' }}>
          Filters
        </p>
        <div className='mt-n1'>
          <button
            type='button'
            className='btn btn-light text-success font-button'
            onClick={() => dispatch(clearFilter())}
          >
            Clear All
          </button>
        </div>
      </div>
      <Collapsible title='Frame Type' isOpen={true}>
        <Row className='mb-4'>
          {frameType.map((item: any) => {
            return (
              <Col lg='4' md='4' sm='6' xs='6' className='px-1 mb-2'>
                <SmallImage
                  frame={item}
                  onClick={() => handleFilter('type', item.id)}
                />
              </Col>
            );
          })}
        </Row>
      </Collapsible>
      <Collapsible title='Frame Shape' isOpen={false}>
        <Row className='mb-4'>
          {frameShape.map((item: any) => {
            return (
              <Col lg='4' md='4' sm='6' xs='6' className='px-1 mb-2'>
                <SmallImage
                  frame={item}
                  onClick={() => handleFilter('shape', item.id)}
                />
              </Col>
            );
          })}
        </Row>
      </Collapsible>
      <Collapsible title='Frame Color'>
        <Row className='mb-4'>
          {frameColor.map((item: any) => {
            return (
              <Col lg='12' md='12' sm='3' xs='3' className='px-1 mb-2'>
                <Checkbox
                  title={item.title}
                  onClick={() => handleFilter('color', item.id)}
                  checked={item.selected}
                />
              </Col>
            );
          })}
        </Row>
      </Collapsible>
      <Collapsible title='Brand'>
        <Row className='mb-4'>
          {frameBrand.map((item: any) => {
            return (
              <Col lg='12' md='12' sm='3' xs='3' className='px-1 mb-2'>
                <Checkbox
                  title={item.title}
                  onClick={() => handleFilter('brand', item.id)}
                  checked={item.selected}
                />
              </Col>
            );
          })}
        </Row>
      </Collapsible>
      <Collapsible title='Price Range'>
        <Row className='mb-4'>
          {priceRange.map((item: any) => {
            return (
              <Col lg='12' md='12' sm='3' xs='3' className='px-1 mb-2'>
                <Checkbox
                  title={item.title}
                  onClick={() => handleFilter('price', item.id)}
                  checked={item.selected}
                />
              </Col>
            );
          })}
        </Row>
      </Collapsible>
      <Collapsible title='Gender'>
        <Row className='mb-4'>
          {gender.map((item: any) => {
            return (
              <Col lg='12' md='12' sm='3' xs='3' className='px-1 mb-2'>
                <Checkbox
                  title={item.title}
                  onClick={() => handleFilter('gender', item.id)}
                  checked={item.selected}
                />
              </Col>
            );
          })}
        </Row>
      </Collapsible>
      <Collapsible title='Frame Size'>
        <Row className='mb-4'>
          {frameSize.map((item: any) => {
            return (
              <Col lg='12' md='12' sm='3' xs='3' className='px-1 mb-2'>
                <Checkbox
                  title={item.title}
                  onClick={() => handleFilter('size', item.id)}
                  checked={item.selected}
                />
              </Col>
            );
          })}
        </Row>
      </Collapsible>
      <Collapsible title='Frame Width'>
        <Row className='mb-4'>
          {frameWidth.map((item: any) => {
            return (
              <Col lg='12' md='12' sm='3' xs='3' className='px-1 mb-2'>
                <Checkbox
                  title={item.title + ' ' + item.unit}
                  onClick={() => handleFilter('width', item.id)}
                  checked={item.selected}
                />
              </Col>
            );
          })}
        </Row>
      </Collapsible>
    </Container>
  );
};

export default Filter;
