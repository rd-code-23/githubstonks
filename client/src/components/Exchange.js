import React, { useState } from "react";
import styled from "styled-components";
function abbreviateNumber(value) {
    let newValue = value;
    const suffixes = ["", "K", "M", "B", "T"];
    let suffixNum = 0;
    while (newValue >= 1000) {
        newValue /= 1000;
        suffixNum++;
    }

    newValue = newValue.toPrecision(3);

    newValue += suffixes[suffixNum];
    return newValue;
}
const Exchange = ({ elem }) => {
    const [buyOrSell, setBuyOrSell] = useState("buy");
    const [inputState, setInputState] = useState(0);
    console.log(inputState);
    console.log(buyOrSell);
    return (
        <Wrapper>
            {buyOrSell === "buy" ? (
                <DivSellContainer>
                    <span
                        style={{
                            color: "rgb(14, 184, 239)",
                            cursor: "pointer",
                        }}
                        onClick={() => setBuyOrSell("buy")}
                    >
                        Buy
                    </span>
                    <span
                        style={{
                            margin: "0px 8px 0px 8px",
                            color: "rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        |
                    </span>
                    <span
                        style={{ cursor: "pointer" }}
                        onClick={() => setBuyOrSell("sell")}
                    >
                        Sell
                    </span>
                </DivSellContainer>
            ) : (
                <DivSellContainer>
                    <span
                        style={{ cursor: "pointer" }}
                        onClick={() => setBuyOrSell("buy")}
                    >
                        Buy
                    </span>
                    <span
                        style={{
                            margin: "0px 8px 0px 8px",
                            color: "rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        |
                    </span>
                    <span
                        style={{ color: "rgb(221,21,33)", cursor: "pointer" }}
                        onClick={() => setBuyOrSell("sell")}
                    >
                        Sell
                    </span>
                </DivSellContainer>
            )}
            <Input
                type="number"
                min="0"
                placeholder="0"
                onChange={(ev) => setInputState(ev.target.value)}
            />
            {buyOrSell === "buy" ? (
                <CostContainer>
                    <p>
                        <CostLabel>Price</CostLabel> $
                        {abbreviateNumber(elem.price)}
                    </p>
                    <p>
                        <CostLabel>Fee</CostLabel> $
                        {abbreviateNumber(inputState * elem.price * 0.1)}
                    </p>
                    <p>
                        <CostLabel>Total</CostLabel> $
                        {abbreviateNumber(
                            inputState * elem.price * 0.1 +
                                inputState * elem.price
                        )}
                    </p>
                </CostContainer>
            ) : (
                <CostContainer>
                    <p>
                        <CostLabel>Price</CostLabel> $
                        {abbreviateNumber(elem.price)}
                    </p>
                    <p>
                        <CostLabel>Total</CostLabel> $
                        {abbreviateNumber(
                            inputState * elem.price * 0.1 +
                                inputState * elem.price
                        )}
                    </p>
                </CostContainer>
            )}
            <CostLabel style={{ marginBottom: "1rem" }}>
                Shares Owned: 0
            </CostLabel>
            <ButtonWrapper>
                {buyOrSell === "buy" ? (
                    <Button
                        style={{
                            backgroundColor: "rgb(14, 184, 239)",
                            border: "1px solid rgb(14, 184, 239)",
                        }}
                    >
                        BUY {elem.symbol}
                    </Button>
                ) : (
                    <Button
                        style={{
                            backgroundColor: "rgb(221,21,33)",
                            border: "1px solid rgb(239, 14, 14)",
                        }}
                    >
                        SELL {elem.symbol}
                    </Button>
                )}
            </ButtonWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    border-radius: 8px;
    width: 200px;
    height: 315px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12),
        0px 1px 3px rgba(0, 0, 0, 0.2);
    padding: 24px 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
    top: 72px;
    margin-left: 8px;
`;

const DivSellContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
`;

const Input = styled.input`
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    width: 210px;
    height: 80px;
    text-align: center;
    font-size: 3rem;
    outline: none;
`;

const ButtonWrapper = styled.div`
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding-top: 14px;
`;

const Button = styled.button`
    width: 218px;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 16px;

    color: rgb(255, 255, 255);
    padding: 24px 72px;
    border-radius: 4px;
    cursor: pointer;
    white-space: nowrap;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12),
        0px 1px 3px rgba(0, 0, 0, 0.2);
`;

const CostContainer = styled.div`
    display: flex;

    & > p {
        margin: 1rem;
    }
`;

const CostLabel = styled.span`
    display: block;
    color: rgba(0, 0, 0, 0.6);
`;

export default Exchange;
