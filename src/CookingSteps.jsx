import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Steps, Button, message } from 'antd';

import gao_tam from './imgs/gaotam.jpeg'
import CookingTable from './CookingTable';

const { Step } = Steps;

const steps = [
  {
    title: 'First',
    content: 'Nấu cơm',
    headings: [
      {
        id: "nguyen-lieu-1",
        name: "Nguyen lieu",
      },
      {
        id: "cach-nau-1",
        name: "Cach nau"
      },
      {
        id: "hoan-thanh-1",
        name: "Hoan thanh"
      }
    ],
    imgs: [
      {
        id: 'nau-1',
        src: gao_tam
      },
      {
        id: 'nau-2',
        src: gao_tam
      },
      {
        id: 'nau-3',
        src: gao_tam
      }
    ]
  },
  {
    title: 'Second',
    content: 'Làm các món ăn kèm',
    img:'./imgs/gaotam.jpeg',
    headings: [
      {
        id: "nguyen-lieu-2",
        name: "Nguyen lieu"
      },
      {
        id: "cach-nau-2",
        name: "Cach nau"
      },
      {
        id: "hoan-thanh-2",
        name: "Hoan thanh"
      }
    ]
  },
  {
    title: 'Third',
    content: 'Pha nước mắm, làm mỡ hành',
    img:'./imgs/gaotam.jpeg',
    headings: [
      {
        id: "nguyen-lieu-3",
        name: "Nguyen lieu"
      },
      {
        id: "cach-nau-3",
        name: "Cach nau"
      },
      {
        id: "hoan-thanh-3",
        name: "Hoan thanh"
      }
    ]
  },
  {
    title: 'Last',
    content: 'Bày ra dĩa và thưởng thức',
    img:'./imgs/gaotam.jpeg',
    headings: [
      {
        id: "nguyen-lieu-4",
        name: "Nguyen lieu"
      },
      {
        id: "cach-nau-4",
        name: "Cach nau"
      },
      {
        id: "hoan-thanh-4",
        name: "Hoan thanh"
      }
    ]
  },
];

const CookingSteps = () => {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <div className="cooking-steps mx-4 my-3 md:mx-20 overscroll-x-none">
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">
        {steps[current].content}
        <CookingTable steps={steps} current={current}/>
      </div>
      
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </div>
  );
};

export default CookingSteps;