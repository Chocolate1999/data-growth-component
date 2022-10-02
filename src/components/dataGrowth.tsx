import gsap, { Linear } from 'gsap';
import * as _ from 'lodash';
import { useEffect, useRef } from 'react';

import clsxm from '@/lib/clsxm';

export type IProps = {
  targetVal: number | string;
  className?: string;
  decimal?: number;
  convert?: boolean;
};

const DataGrowth = ({ targetVal, className, decimal = 0, convert }: IProps) => {
  // eslint-disable-next-line
  const gsapId = useRef<any>();
  // eslint-disable-next-line
  const span: any = useRef<HTMLDivElement>(null);
  // 每三位以 , 进行分隔
  const convertDigital = (val: number | string) => {
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  useEffect(() => {
    const target = { value: 0 };
    gsapId.current = gsap.to(target, {
      duration: 2,
      ease: Linear.easeNone,
      value: targetVal,
      onUpdate: () =>
        _.set(
          span.current,
          'innerHTML',
          convert ? convertDigital(target.value) : target.value.toFixed(decimal)
        ),
    });
    return () => gsapId.current && gsapId.current.kill();
    // eslint-disable-next-line
  }, []);

  return <span ref={span} className={clsxm(className)}></span>;
};

export default DataGrowth;
