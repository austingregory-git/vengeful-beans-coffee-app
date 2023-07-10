import styled from "styled-components";

export const backgroundStyles = {
    position: "fixed",
    top:"calc(10vh + 164px)",
    left:0,
    width: "100%",
    height: "100%",
    background: '#b8f5fa',
    zIndex: -2,
};

export const particlesStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
}

export const imageStyle = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    height: "100%",
    maxWidth: 788,
    maxHeight: 328,
    border: "1px solid black"
};

export const ourStoryBrownContainerStyles = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    height: "100%",
    maxWidth: 788,
    maxHeight: 328,
    border: "1px solid black",
    background: "#f3bc9c"
};

export const ourStoryPinkContainerStyles = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    height: "100%",
    maxWidth: 788,
    maxHeight: 328,
    border: "1px solid black",
    background: "#ffaec8"
};

export const OurStoryText = styled.div`
color: #000000;
font-size: 1.5em;
font-family: 'Bradley Hand',cursive;
text-align: center;
white-space: pre-line;
padding: 10px;
max-height: 328;
@media screen and (max-width: 668px) {
    font-size: 1em;
}
@media screen and (max-width: 400px) {
    font-size: 0.75em;
}
`;

export const OurStoryLore = styled.div`
color: #000000;
font-size: 1.25em;
font-family: 'Bradley Hand',cursive;
text-align: center;
white-space: pre-line;
padding: 10px;
max-height: 328;
@media screen and (max-width: 668px) {
    font-size: 1em;
}
@media screen and (max-width: 400px) {
    font-size: 0.75em;
}
`;

export const abigailAndFeeImageStyles = {
    display: "block",
    width: "100%",
    height: "100%",
    maxHeight: 328,
    maxWidth: 394,
    height: "auto",
};

export const scheduleStyles = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "20px 0",
    width: "100%",
    height: "100%",
    maxWidth: 788,
    maxHeight: 328,
    border: "1px solid black",
    background: "#f3bc9c",
    color: "#000000",
    fontSize: "1.5em",
    fontFamily: "Bradley Hand,cursive",
    textAlign: "center",
    whiteSpace: "pre-line",
};

export const darkScheduleStyles = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "20px 0",
    width: "100%",
    height: "100%",
    maxWidth: 788,
    maxHeight: 328,
    border: "1px solid black",
    background: "#0c4363",
    color: "#000000",
    fontSize: "1.5em",
    fontFamily: "Bradley Hand,cursive",
    textAlign: "center",
    whiteSpace: "pre-line",
};

export const featuredItemsStyles = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "20px 0",
    width: "100%",
    height: "100%",
    maxWidth: 788,
    maxHeight: 424,
    border: "1px solid black",
    background: "#ffaec8",
    color: "#000000",
    fontSize: "1.5em",
    fontFamily: "Bradley Hand,cursive",
    textAlign: "center",
    whiteSpace: "pre-line",
};

export const merchItemsStyles = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    height: "100%",
    maxWidth: 788,
    border: "1px solid black",
    background: "#ffaec8",
    color: "#000000",
    fontSize: "1.5em",
    fontFamily: "Bradley Hand,cursive",
    textAlign: "center",
    whiteSpace: "pre-line",
};

export const menuStyles = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "20px 0",
    width: "100%",
    height: "100%",
    maxWidth: 788,
    maxHeight: "100%",
    border: "1px solid black",
    background: "#f3bc9c",
    color: "#000000",
    fontSize: "1.5em",
    fontFamily: "Bradley Hand,cursive",
    textAlign: "center",
    whiteSpace: "pre-line",
};

export const menuCategoryStyles = {
    padding: "10px 0",
    fontSize: "1em",
    fontFamily: "Bradley Hand,cursive",
    textAlign: "center",
    whiteSpace: "pre-line",
    //background: "#ffaec8",
    background: "#f3bc9c",
};

export const menuItemStyles = {
    fontSize: "0.75em",
    fontFamily: "Bradley Hand,cursive",
    textAlign: "center",
    whiteSpace: "pre-line",
};

export const menuItemDescriptionStyles = {
    fontSize: "0.5em",
    fontFamily: "Bradley Hand,cursive",
    textAlign: "center",
    whiteSpace: "pre-line",
};

export const bottomBarStyles = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "5px 0",
    width: "100%",
    height: "100%",
    maxWidth: 788,
    maxHeight: 128,
    border: "1px solid black",
    background: "#ffaec8",
    color: "#000000",
    fontSize: "0.75em",
    fontFamily: "Bradley Hand,cursive",
    textAlign: "center",
    whiteSpace: "pre-line",
};

export const merchItemsGridStyles = {
    maxHeight: 328,
    '&:hover': {
        '& .image-overlay': {
            display: 'block',
        },
    },
};

export const featuredItemsGridStyles = {
    '&:hover': {
        '& .image-overlay': {
            display: 'block',
        },
    },
};

export const menuGridStyles = {
    padding: "10px 0"
};

export const socialMediaIconStyles = {
    marginRight: "5px",
    marginLeft: "5px"
}