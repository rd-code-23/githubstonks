import React from "react";
import styled from "styled-components";
const Account = () => {
    return (
        <Wrapper>
            <div>
                <Table>
                    <Thead>
                        <tr>
                            <Th>Logo</Th>
                            <Th>Name</Th>
                            <Th>Symbol</Th>
                            <Th>Price</Th>
                            <Th>Quantity</Th>
                            <Th>Total Cost Basis</Th>
                            <Th>Total Gain/Loss ($)</Th>
                            <Th>Total Gain/Loss (%)</Th>
                            <Th>Current Value</Th>
                        </tr>
                    </Thead>
                    <tbody>
                        <tr>
                            <Td>⚛</Td>
                            <Td>React</Td>
                            <Td>RCT</Td>
                            <Td>$420</Td>
                            <Td>10</Td>
                            <Td>$4200</Td>
                            <Td>$0</Td>
                            <Td>%0</Td>
                            <Td>$420</Td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    padding: 25px 40px 20px 40px;
    & > div {
        padding: 1rem;
        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14),
            0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2);
    }
`;

const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
    height: 100%;
    text-align: center;
`;

const Thead = styled.thead`
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;
const Th = styled.th`
    padding: 1rem;
    text-align: center;
    background-color: white;
    color: black;
`;

const Td = styled.td`
    padding: 1rem;
`;

export default Account;
