import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding:20px;
    align-items: center;
    a{
        text-decoration: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-family: 'Krona One', sans-serif;
        transition: color 0.2s;
        color: #3A3A3A;

        &:hover{
            color: #666;
        }


        strong{            
            margin-left:5px;
        }
    }
    
`;

export const ContainerHeader = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const RepositoryHeader = styled.div`

    display: flex;
    align-items: center;
    margin-top: 30px;
    img{
        width:120px;
        height:120px;
        border-radius:50%;
        margin-right: 20px;
    }

    div{
        flex:1;
        display:flex;
        align-items:flex-start;
        flex-direction: column;
        p{
            margin-top:5px;
        }
    }
`;

export const RespositoryInfo = styled.div`
    margin-top:20px;

    ul{
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;


        li{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;
            background-color: #dfe6e9;
            border-radius: 5px;
            margin:10px;
            border: 1px solid ${shade(0.2, '#dfe6e9')};

            & + li {
                margin-left: 50px;
            }
            strong{
                font-size: 36px;
            }
        }
    }
`;

export const Issues = styled.div`
    margin-top:80px;   
    
    a{
        background: #fff;
        border-radius: 5px;
        width: 100%;
        padding:24px;
        display:block;
        text-decoration:none;
        transition: background-color 0.2s;
        transition: transform 0.2s;


        & + a {
            margin-top:10px;
        }

        display:flex;
        align-items:center;

        &:hover{
            background: ${shade(0.1, '#fff')};
            transform: translateX(8px);

        }


        div{
            margin-left: 16px;
            flex: 1;

            strong{
                font-size:16px;
                color: #3d3d4d;
            }

            p{
                font-size: 18px;
                color: #A8A8B3;
                margin-top: 4px;
            }

           
        }
        svg{
            margin-left: auto;
            color: #CBCBD6;
        }

        
    }
`;