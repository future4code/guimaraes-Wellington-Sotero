import styled from 'styled-components';

export const AreaHeader = styled.div`
    height:60px;
    background-image: linear-gradiente(to right, #FE5D26, #370d44);
    color: yellow;

    .container{
        padding: 5px 20px;
        display: flex;
        align-items: center;
    }

    .logo{
        flex: 1;

        img{
            width: 45px;
        }
    }

    nav{

        ul{
            display: flex;
        }

            li{
                list-style: none;
                margin-left: 20px;

                a{
                    text-decotation: none;
                    color: #fff;

                    &:hover{
                        color: #F5BB00;
                    }

                }
            }
    }




`;