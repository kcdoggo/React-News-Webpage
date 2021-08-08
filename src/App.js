import NewsList from './components/NewsList';
import 'antd/dist/antd.css';
import { Layout, Menu,Typography } from 'antd';
import Categories from './components/Categories';
import {useState, useCallback} from 'react';

const { Title } = Typography;
const { Header, Footer,  Content } = Layout;

const App = () => {
  //카테고리 상태관리 
  const [category, setCategory] = useState('all');
  //카테고리 클릭하면, 세터함수를 설정해주는.
  const onSelect = useCallback(
    category => setCategory(category),
    []
  );


  return (
   
    <Layout>
   
      <Layout>
        <Categories category={category} onSelect={onSelect} />
        <Header style={{ height:100, display:'inline-flex', justifyContent: 'center' ,alignItems:'center'}} >
          <Title style={{color:'white'}}>CdoGGo Times</Title>
          </Header>
        
        <Content className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {/**뉴스 내용을 카테고리별로 보여주기 위해 prop를 category 넘겨주기 */}
          <NewsList  category={category}/></Content>
        <Footer>Footer</Footer>
        </Layout>
      </Layout>
   )

}

export default App;
