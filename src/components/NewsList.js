//NewsList : axios.get 를 이용해 API요청하고,
//자식 컴포넌트 NewsItem을 컴포넌트 배열로 변환

import { useState,useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components'; 
import NewsItem from './NewsItem';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    display:grid;
    grid-template-columns: 1fr 1fr;    margin: 0 auto;
    width:950px;
    padding-top:2rem;
    background-color: white;
    padding:20px;

 //반응형 웹
 @media screen and(max-width:768px){
        width: 100%;
        padding-left: 1rem;
        padding-right:1rem;
    }`;


const NewsList = ({category}) => {

    //api 요청결과값 article상태 관리
    const [articles, setArticles]= useState(null);
    //로딩 상태관리 (요청대기중:true, 요청끝나면false)
    const [loading, setLoading]= useState(false);

    /*useEffect는 처음 페이지가 렌더링될때, 
    무조건 한번만 실행됨, 따라서 처음 렌더링 
    시작될 시점에 한번만 API 요청, 두번째 패러미터는 무엇이 변경됬을경우 실행해라*/
    useEffect(() => {
        //데이터 가져오는 함수 선언 axios.get
        /*async 은 현재사용할 함수를 비동기로 처리함을 알림
        try-catch부문 쓰고, 그 안에 await는 비동기로 순차처리하기 위해 수행할 api에 붙임*/
        const fetchData = async() =>{
            setLoading(true);
            try{
            const query= category ==='all'?'' :`&category=${category}`;    
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=86e201b96d5f47ddb139308e6631ed19`,);
            //요청결과값을 세터함수에..response.data.요청결과 객체이름
            setArticles(response.data.articles);
        }catch(e){
            console.log(e); //에러발생시 출력 
        }
        //다 끝냈으면, 요청 끝냈음을 나타내는 로딩false
        setLoading(false);
        }
        fetchData();
    }, [category]) //빈 배열, 처음 렌더링할때만 실행해라 뜻
    
    //리턴값 3개: 로딩중일때, articles 값 설정안됬을때,articles값 유효할때 
    if(loading){return (<div>Waiting...</div>)}
    if(!articles){return null}
    //article 값 유효할때
    return(
        <NewsListBlock>
            {/**배열map으로 돌기,그때 꼭key값 부여 */}
            {articles.map(article =>( 
                <NewsItem key={article.url} article={article}/>
            ))}
        </NewsListBlock>
    )
}

export default NewsList;