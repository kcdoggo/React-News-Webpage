import styled from 'styled-components';

//newsApi사이트에 category 옵션 있음.체크 
//https://newsapi.org/docs/endpoints/top-headlines
const categories =[
    {name:'all', text:'All'},
    {name:'business', text:'business'},
    {name:'technology', text:'technology'},
    {name:'entertainment',text:'entertainment'},
    {name:'health', text:'health'},{
        name:'sports', text:'sports'
    }
]

const CategoriesBlock = styled.div`
    background:#001529;
    color:white;
    display:flex;
    padding:1rem;
    margin:0;  
 
`;

const Category = styled.div`
    font-size: 1rem;
    cursor:pointer;
    margin-right:1rem;
    &+&{
        margin-right:1.5rem;
    }

    &:hover{
        color: grey;
    }
`;

//클릭을 하면 onSelect함수를 실행해서 값 설정해줘야 함.
const Categories = ({onSelect,category}) => {

    return(
        <CategoriesBlock>
            {categories.map(
                c=> (<Category onClick={()=>onSelect(c.name)} key={c.name}>{c.text}</Category>)
            )}
        </CategoriesBlock>

    )
}

export default Categories;