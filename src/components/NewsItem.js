// NewsItem : 각 뉴스 정보를 보여줌, NewsList의 자식 컴포넌트
// 조건부 스타일링을 위해 styled compoent 적용
import styled from 'styled-components';

/*주의!!! 코드 작성시, 스타일링은 맨 뒤에 하는 거임 . 
왜냐면 html요소를 컴포넌트에 먼저 적용해줘야하니까*/ 


/*스타일링은 클래스네임인 Thumbnail(a,img)과 
내용className인 Content(h2,a,p) 를 적용할거임.*/
const NewsItemBlock = styled.div`

    display:flex; //썸네일,컨텐트 인라인.
    margin:0;
    padding:0;
    box-sizing: border-box;
    .thumbnail {
        margin-right: 0.8rem; //이미지 옆 공간 1rem
        
        img{
            margin-top:0;
            padding:0;
            width:160px;
            height:160px;
            object-fit: cover; //이미지 비율그대고 주어진 공간만 차지함.
        }
    }

    .contents{
        margin-right:1.8rem;
        h2{ 
            margin:0;
     
            a{color:black;
              text-decoration:none;
            }
        }
        p{
            margin:0;
            line-height:1.5;
            margin-top:0.5rem; //제목하고 거리둠.
            white-space:normal; //줄이 너무 길어 넘치면 자동으로 줄 바꿈
        }
    }
    
    /*&는 NewsItemBlock을 가리키고, &+&는 부모 컴포넌트에서 
    이 컴포넌트를 연달아 쓸때 적용하는 거임*/
    &+&+&{

        //두 기사가 연달아 오면 위로 3rem띄워줌.
        margin-top:3rem;
            
    }
    
  
    
    `;




/*부모컴포넌트인 NewsList에서 props로 
article을 줄거니까 , 패러미터에 넣기*/
const NewsItem = ({article}) => {

    //article객체에 들어있는 속성들,비구조화 문법할당(키워드 생략)
    //img src={urlToImage}, a href={url} 사용
    const {url,urlToImage,description,title} = article; 

    return(
        <NewsItemBlock> {/**이게 div임 */}

        {/* thumbnail과 content 따로 분리
         1.thumbnail (a링크와 img이미지 배치)*/}
        {urlToImage &&(
            <div className="thumbnail">
            {/*이미지 누르면 기사링크로 갈수있도록,a가 img를 감쌈*/}
              <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={urlToImage} alt="thumbnail"/>
              </a>
            </div>
        
        )}
        {/*content, 기사제목h2+링크과 내용p 배치*/}
        <div className="contents">
            <h2> {/**제목 누르면 링크로 */}
                <a href={url} target="_blank" rel="noopener noreferrer" >
                    {title}
                </a>
            </h2>
            <p>{description}</p>
        </div>    
        </NewsItemBlock>
    )
}

export default NewsItem;