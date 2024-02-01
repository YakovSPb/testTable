
import './App.css';
import { Checkbox } from 'antd';
import Table from 'antd/lib/table';
import {useState} from "react";
import {useEffect} from "react";

function App() {
  const CheckboxComponent = () => {
    const [toggle, setToggle] = useState(false)
    const onChange= () => setToggle(!toggle)
    return  <Checkbox checked={toggle} onChange={onChange}>Checkbox</Checkbox>;
  }

  //
  // useEffect(() => {
  //    const tableContent = document.querySelector('.ant-table-body')
  //   if(tableContent) return
  //   tableContent?.addEventListener('scroll', (event) => {
  //     console.log('yes, I am listening')
  //     let maxScroll = event.target.scrollHeight - event.target.clientHeight
  //     let currentScroll = event.target.scrollTop
  //     if (currentScroll === maxScroll) {
  //       // load more data
  //     }
  //   })
  // },[])

  const dataSource = [
    {
      key: '1',
      string: 'Mike',
      number: 32,
      flag: <CheckboxComponent />,
      string2: 'Mike2',
      number2: 30,
      flag2: <CheckboxComponent />,
    },
    {
      key: '2',
      string: 'Aike2',
      number: 322,
      flag: <CheckboxComponent />,
      string2: 'Mike22',
      number2: 302,
      flag2: <CheckboxComponent />,
    },
    {
      key: '3',
      string: 'Bike3',
      number: 323,
      flag: <CheckboxComponent />,
      string2: 'Mike23',
      number2: 303,
      flag2: <CheckboxComponent />,
    },
    {
      key: '4',
      string: 'Gike4',
      number: 324,
      flag: <CheckboxComponent />,
      string2: 'Mike24',
      number2: 304,
      flag2: <CheckboxComponent />,
    },
    {
      key: '5',
      string: 'Yike5',
      number: 325,
      flag: <CheckboxComponent />,
      string2: 'Mike25',
      number2: 305,
      flag2: <CheckboxComponent />,
    },
  ];

  const columns = [
    {
      title: 'String',
      dataIndex: 'string',
      key: 'string',
      sorter: {
        compare: (a, b) =>  a.string.localeCompare(b.string),
        multiple: 1,
      },
    },
    {
      title: 'Number',
      dataIndex: 'number',
      key: 'number',
      sorter: {
        compare: (a, b) => a.number - b.number,
        multiple: 2,
      },
    },
    {
      title: 'Flag',
      dataIndex: 'flag',
      key: 'flag',
    },
    {
      title: 'String2',
      dataIndex: 'string2',
      key: 'string2',
      sorter: {
        compare: (a, b) =>  a.string2.localeCompare(b.string2),
        multiple: 3,
      },
    },
    {
      title: 'Number2',
      dataIndex: 'number2',
      key: 'number2',
      sorter: {
        compare: (a, b) => a.number2 - b.number2,
        multiple: 4,
      },
    },
    {
      title: 'Flag2',
      dataIndex: 'flag2',
      key: 'flag2',
    },
  ];


  const options = columns.map(i=> i.key)

  const [filterIds, setFilterIds] = useState(options)


  const FilterComponent = () => {
    const setFilter = (key) => {
      if(filterIds.includes(key)){
        const newFilterIds = filterIds.filter(id=> id !== key)
        setFilterIds(newFilterIds)
      } else{
        setFilterIds(prev=> [...prev, key])
      }

     }
    return(
        options.map(o=><Checkbox key={o} checked={filterIds.includes(o)} onChange={()=>setFilter(o)}>{o}</Checkbox>)
    )
  }



  return (
      <div className="App">

        <br/> <br/> <br/>
        <FilterComponent/>
        <br/> <br/> <br/>
          <Table
              pagination={false}
              dataSource={dataSource}
              columns={columns.filter(column => filterIds.includes(column.key))}/>
      </div>
  );
}

export default App;
