import './App.css';
import './output.css';
import 'react-notion/src/styles.css';

import { NotionRenderer } from 'react-notion';
import { useState, useEffect } from 'react';


function Recruit()
{

  const [response, setResponse] = useState({});

  
  useEffect(() => {
    // 두번째 방법
    const NOTION_PAGE_ID = '284a97d63cfc402cbf2b5945695068a9';
    fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then(res => res.json())
      .then((resJson) => {
        setResponse(resJson);
      });
  }, [])
  
  return (
    <div className="App bg-white mt-20 ">
        <NotionRenderer
          disableHeader
          // blockMap={staticResponse}
          blockMap={response}
          fullPage={true}
        />
    </div>
  );
}

export default Recruit;