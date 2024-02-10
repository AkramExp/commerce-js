import styled from "styled-components";

const InfoDiv = styled.div`
  background: none;
  height: 40%;
  width: 100%;
  font-family: "Source Code Pro", monospace;
  line-height: 1.5rem;
`;

const InfoDivText = styled.p`
  color: white;
`;

const Sky = styled.span`
  color: #41c7dc;
`;

const Blue = styled.span`
  color: #3397ed;
`;

const Orange = styled.span`
  color: #ef9761;
`;

const Purple = styled.span`
  color: #7f78c7;
`;

const Green = styled.span`
  color: #26916e;
`;

export default function Code({ active }) {
  return (
    <>
      {active === 1 && (
        <InfoDiv>
          <InfoDivText>
            <Blue>import</Blue> Commerce <Blue>from</Blue>{" "}
            <Green>&apos;@chec/commerce.js&apos;</Green>
            <Sky>;</Sky>
            <br />
            <br />
            <Blue>const</Blue> commerce <Sky>=</Sky> <Blue>new</Blue>{" "}
            <Orange>Commerce</Orange>
            <Sky>&#40;</Sky>
            <Green>&apos;&#123;your_public_key&#125;&apos;</Green>
            <Sky>&#41;;</Sky>
            <br />
            <br />
            commerce<Sky>.</Sky>products<Sky>.</Sky>
            <Purple>list</Purple>
            <Sky>&#40;&#41;;</Sky>
            <br />
            <Purple>then</Purple>
            <Sky>&#40;&#40;</Sky>product<Sky>&#41; =&#62;</Sky> console
            <Sky>.</Sky>
            <Purple>log</Purple>
            <Sky>&#40;</Sky>product<Sky>&#41;&#41;;</Sky>
          </InfoDivText>
        </InfoDiv>
      )}
      {active === 2 && (
        <InfoDiv>
          <InfoDivText>
            <Blue>import</Blue> Commerce <Blue>from</Blue>{" "}
            <Green>&apos;@chec/commerce.js&apos;</Green>
            <Sky>;</Sky>
            <br />
            <br />
            <Blue>const</Blue> commerce <Sky>=</Sky> <Blue>new</Blue>{" "}
            <Orange>Commerce</Orange>
            <Sky>&#40;</Sky>
            <Green>&apos;&#123;your_public_key&#125;&apos;</Green>
            <Sky>&#41;;</Sky>
            <br />
            <br />
            commerce<Sky>.</Sky>cart<Sky>.</Sky>
            <Purple>add</Purple>
            <Sky>&#40;</Sky>
            <Green>&apos;product_id&apos;</Green>
            <Sky>&#41;</Sky>
            <br />
            <Purple>then</Purple>
            <Sky>&#40;&#40;</Sky>cart<Sky>&#41; =&#62;</Sky> console
            <Sky>.</Sky>
            <Purple>log</Purple>
            <Sky>&#40;</Sky>cart<Sky>&#41;&#41;;</Sky>
          </InfoDivText>
        </InfoDiv>
      )}
      {active === 3 && (
        <InfoDiv>
          <InfoDivText>
            <Blue>import</Blue> Commerce <Blue>from</Blue>{" "}
            <Green>&apos;@chec/commerce.js&apos;</Green>
            <Sky>;</Sky>
            <br />
            <br />
            <Blue>const</Blue> commerce <Sky>=</Sky> <Blue>new</Blue>{" "}
            <Orange>Commerce</Orange>
            <Sky>&#40;</Sky>
            <Green>&apos;&#123;your_public_key&#125;&apos;</Green>
            <Sky>&#41;;</Sky>
            <br />
            <br />
            <Blue>const</Blue> checkout <Sky>=</Sky> <Blue>await</Blue> commerce
            <Sky>.</Sky>checkout<Sky>.</Sky>
            <Purple>generateTokenFrom</Purple>
            <Sky>&#40;</Sky>
            <Green>&apos;cart&apos;</Green>
            <Sky>,</Sky> cart.id<Sky>&#41;;</Sky>
            <br />
            <br />
            <Blue>const</Blue> order = <Sky>=</Sky> <Blue>await</Blue> commerce
            <Sky>.</Sky>checkout<Sky>.</Sky>
            <Purple>capture</Purple>
            <Sky>&#40;</Sky>checkout<Sky>.</Sky>id<Sky>&#41;;</Sky>
          </InfoDivText>
        </InfoDiv>
      )}
    </>
  );
}
