import styled, {css} from 'styled-components';
import { shade } from 'polished';

interface FormProps{
    hasError: boolean;
}

export const Title = styled.h1`
    font-family: 'Krona One', sans-serif;
    font-size: 46px;
    color: #3A3A3A;
    margin-top:80px;
    max-width:700px;
    line-height:66px;
`;

export const Form = styled.form<FormProps>`
    background-color: #dfe6e9;
    margin-top:40px;
    max-width: 700px;
    display:flex;

    input{
        flex:1;
        height:70px;
        padding:0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #3A3A3A;

        border:2px solid #fff;
        border-right:0;

        ${(props) => props.hasError && css`
        border-color: #e17055;
        `}

        &::placeholder{
            color: #a8a8b3;
        }
    }
    button{
        width:210px;
        height:70px;
        background: #04d361;
        border-radius: 0 5px 5px 0;
        border:0;
        color: #fff;
        font-weight: 700;
        transition: background-color 0.2s;

        &:hover{
            background: ${shade(0.2, '#04d361')};
        }
    }
`;

export const Repositories = styled.div`
    margin-top:80px;
    max-width:700px;

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


        img{
            width: 64px;
            height: 64px;
            border-radius: 50%;
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

export const Error = styled.div`
    width: 700px;
    height:50px;
    background-color: #e17055;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:20px;
    border-radius: 5px;
    strong{
        color: #fff;
        font-family: 'Krona One', sans-serif;
        font-size: 20px;
    }
`;
