import { Card, CardBody, Tab, Tabs } from '@nextui-org/react';

const TabData = ({
  data,
}: {
  data: { summary: string; transcription: string };
}) => {
  return (
    <div className='flex w-[600px] flex-col'>
      <Tabs aria-label='Options'>
        <Tab key='jp' title='Summary'>
          <Card>
            <CardBody className='overflow-scroll h-96'>{data.summary}</CardBody>
          </Card>
        </Tab>
        <Tab key='en' title='Transcription'>
          <Card>
            <CardBody className='overflow-scroll h-96'>
              {data.transcription}
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};

export default TabData;
