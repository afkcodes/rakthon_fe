import { Card, CardBody, Tab, Tabs } from '@nextui-org/react';

const TabData = ({ data }: { data: { en: string; jp: string } }) => {
  return (
    <div className='flex w-full flex-col'>
      <Tabs aria-label='Options'>
        <Tab key='jp' title='Japanese'>
          <Card>
            <CardBody>{data.jp}</CardBody>
          </Card>
        </Tab>
        <Tab key='en' title='English'>
          <Card>
            <CardBody>{data.en}</CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};

export default TabData;
