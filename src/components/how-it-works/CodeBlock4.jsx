import CodeBlockDiv from "./CodeBlockDiv";
import {
  Comment,
  Sky,
  Blue,
  Green,
  Orange,
  White,
  Dot,
  Purple,
  OpenBrac,
  Apos,
  CloseBrac,
} from "./CodeColors";

export default function CodeBlock4() {
  return (
    <CodeBlockDiv>
      <White>
        <Blue>import</Blue> Commerce <Blue>from</Blue>{" "}
        <Green>&apos;@chec/commerce.js&apos;</Green>
        <Sky>;</Sky>
        <br />
        <br />
        <Blue>const</Blue> commerce <Sky>=</Sky> <Blue>new</Blue>{" "}
        <Orange>Commerce</Orange>
        <Sky>&#40;</Sky>
        <Green>&apos;&#123;your_public_key&#125;&apos;</Green> <Sky>&#41;;</Sky>
        <br />
        <br />
        <Comment>
          &#47;&#47; Gets new checkout token from specific identifier
        </Comment>{" "}
        commerce
        <Dot />
        checkout
        <Dot /> <Purple>generateToken</Purple>
        <OpenBrac />
        <Apos />
        <Green>permalink</Green>
        <Apos />, <Apos />
        <Green>white-shirt</Green>
        <Apos />
        <CloseBrac />
        <Dot />
        <Purple>then</Purple>
        <OpenBrac />
        <OpenBrac />
        checkout
        <CloseBrac /> <Sky>=&#62;</Sky> console
        <Dot />
        <Purple>log</Purple>
        <OpenBrac />
        checkout.id
        <CloseBrac />
        <CloseBrac />
      </White>
    </CodeBlockDiv>
  );
}
