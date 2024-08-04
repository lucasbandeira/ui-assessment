import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faPercent } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

export const AccountOverview = ({data}) => {
  console.log(data);

  const Navigation = styled.div`
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0; 
    right: 0;
    display: flex;  
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;
    width: calc(70% - 10px);
    background-color: rgb(189, 189, 189);

    @media (max-width: 100px) {
      flex-direction: column;
    }
  `

  const Title = styled.h1`
    font-family: Roboto
    margin: 0 15px 20px 0;
    padding: 10px;
  `

  const SupportDiv = styled.div`
    text-align: center;
    align-content: center;
    display: flex;  
    gap: 15px;
  `

  const ColumnNav = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px;
  `

  const SupportContactName = styled.h4`
    font-family: Roboto
    margin: 1px 0;

    &:hover {
      opacity: 0.6;
    }   
  `
  
  const EmailTelDiv = styled.div`
    display: flex;
    justify-content: space-around;
  `

  const SupportContactEmail = styled.p`
    font-family: Roboto
    margin: 3px;

    &:hover {
      opacity: 0.6;
    }   
  `

  const SupportContactTel = styled.p`
    font-family: Roboto
    margin: 3px;
    align-self: flex-start

    &:hover {
      opacity: 0.6;
    }   
  `

   

  const DetailsNav = styled.div`
    display: flex;
    flex-direction: flex
    align-content: flex-start;
    

    width: calc(100% - 10px);
    background-color: rgb(255, 255, 255);
    margin: 0 15px 20px 0;
    padding: 10px;
    border: 1px solid #000;
  `

  const TitleSales = styled.h3`
    align-self: start;
    margin: 0 0 0 10px;
  `

  const SalesOverviewerDesc = styled.p`
    margin: 0 0 0 10px;
    font-family: Roboto;
    font-size: 13px;
  `
  const UploadPercent = styled.div`
    display: flex;
    flex-direction: flex
    align-content: flex-start;
    

    width: calc(50% - 10px);
    background-color: rgb(255, 255, 255);
    margin: 0 15px 20px 0;
    padding: 10px;
    border: 1px solid #000;
  `

  return (
      <Navigation>
          <Title>
            Account Overview
          </Title>
          <SupportDiv>

            <ColumnNav>
              <SupportContactName>{data.supportContact.name}</SupportContactName>
              <EmailTelDiv>
                <SupportContactEmail>{data.supportContact.email}</SupportContactEmail>
                <SupportContactTel>&nbsp; &nbsp; {data.supportContact.tel}</SupportContactTel>
              </EmailTelDiv>
            </ColumnNav>  
          </SupportDiv>
          
          <DetailsNav>
            <FontAwesomeIcon icon={faUpload} style={{color: "#74C0FC", alignSelf: "center"}} />
            <ColumnNav>
              <TitleSales>Sales</TitleSales>
              <SalesOverviewerDesc>You had <b>{data.salesOverview.uploads} uoloads </b> and <b>{data.salesOverview.linesSaved}</b> lines added</SalesOverviewerDesc>
            </ColumnNav>
          </DetailsNav>
          <UploadPercent>
            {data.salesOverview.successfulUploads}
            <FontAwesomeIcon icon={faPercent} size="2x" style={{color: "#63E6BE",}} />
          </UploadPercent>
      </Navigation>
  )
}

export default AccountOverview;