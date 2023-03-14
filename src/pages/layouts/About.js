import React from 'react'
import Header from '../../components/Header'
import styled from 'styled-components';
import { Link, Outlet, useNavigate } from 'react-router-dom'

const ContentWrapper = styled.div`
  margin-top: 16px;
  flex: 1;
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
`

function About () {
    const navigate= useNavigate()
    return (
        <div className="main-page">
            <Header/>
            <div onClick={(e)=>navigate('./tiktactoe')}>123</div>
            <ContentWrapper>
                <Outlet/>
            </ContentWrapper>
        </div>
        
    )
}

export default About