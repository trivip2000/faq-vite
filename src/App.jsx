
import { useEffect,useState } from 'react';
import { Input, Collapse,Spin } from 'antd';
import { groupBy } from 'lodash';
import { CaretRightOutlined } from '@ant-design/icons';
import {ContentStyle} from './styled'
import axios from 'axios'
const { Panel } = Collapse;
function App() {
  const [loading,setLoading] = useState(false)
  const [config,setConfig] = useState({})
  const questions = [
    {
        "id": 2,
        "storeId": "pms-web1.myshopify.com",
        "question": "Question 2",
        "answer": "<p>hello</p>",
        "visible": true,
        "createdAt": "2023-06-04T14:24:47.577Z",
        "updatedAt": "2023-06-04T14:24:47.577Z",
        "categoryId": null
    },
    {
        "id": 3,
        "storeId": "pms-web1.myshopify.com",
        "question": "Question 3",
        "answer": "<p>Anwser Question 3</p>",
        "visible": true,
        "createdAt": "2023-06-06T13:59:31.859Z",
        "updatedAt": "2023-06-06T13:59:31.859Z",
        "categoryId": null
    }
]
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const res = await axios.get('https://api.mockfly.dev/mocks/301bc0a5-fcbf-43ba-90c7-3b920a2ea6cb/config');
      const {data } = res
      setConfig({...data})
      setLoading(false);
    }
    fetchData()
  },[])
  const grouped = groupBy(questions, question =>
    question.categoryId ? question.categoryId : 'Uncategorized',
  );
  console.log(config,"config123123")
  return (
    <ContentStyle {...config}>
      <Spin tip="Loading" spinning={loading} size="large">
      <div className="title-container">
          <h2 className="text-center">Frequently Asked Questions</h2>
          <Input
            className="text-center input-search"
            size="large"
            placeholder="What can we help you with?"
          />
          <span className="text-center">
            Welcome to our FAQ Page. This page is showing theme #1. You can set optional intro text
            and footer text for your FAQ page. Text you are currently reading is a intro text and
            can be set through app settings. We also have theme #2 which you can check by navigating
            to link in a menu bar
          </span>
        </div>
        <div className="question">
          {Object.keys(grouped).map(key => (
            <div key={key}>
              <h4 className="category">{key || 'Uncategorized'}</h4>
              <Collapse
                ghost
                defaultActiveKey={['1']}
                expandIconPosition="end"
                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
              >
                {grouped[key].map(question => {
                  return (
                    <Panel key={question.id} header={question.question}>
                      <p key={question.id} dangerouslySetInnerHTML={{ __html: question.answer }} />
                    </Panel>
                  );
                })}
              </Collapse>
            </div>
          ))}
        </div>
        </Spin>
    </ContentStyle>
  )
}

export default App
