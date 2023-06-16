import styled from 'styled-components';
export const ContentStyle = styled.div`
  .ContentAction {
    display: flex;
    justify-content: flex-end;
  }
  .category {
    font-size: ${props => props.categoryFontSize}px;
  }
  .question {
    margin-top: 36px;
    h4 {
      color: #000000;
      font-weight: 600;
    }
    .ant-collapse-item {
      margin-top: 12px;
    }
    .ant-collapse-header {
      background: #3d4246;
      color: white;
      font-weight: bold;
      font-size: 14px;
      border-radius: 4px;
    }
    .ant-collapse-content-box {
      background-color: #eeeeee;
      color: #133337;
      border: none;
      font-size: 14px;
      box-shadow: 3px 3px 6px #ddd, -3px 3px 6px #ddd;
    }
  }
  .title-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
  .input-search {
    width: 480px;
  }
`;
