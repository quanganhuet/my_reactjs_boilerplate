import styled from "styled-components";
import { Spinner } from "@blueprintjs/core";
import PropTypes from "prop-types";

const LoadingOverLayContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(17, 20, 24, 0.7);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    &.on-hiding {
        display: none;
    }
`;
const MessageOnLoading = styled.p`
    color: white;
`;

export function LoadingOverlay({ message, onDisplay }) {
    return (
        <LoadingOverLayContainer className={onDisplay ? "" : "on-hiding"}>
            <Spinner intent={"primary"} />
            <MessageOnLoading>{message}</MessageOnLoading>
        </LoadingOverLayContainer>
    );
}

LoadingOverlay.propTypes = {
    message: PropTypes.string,
    onDisplay: PropTypes.bool,
};
