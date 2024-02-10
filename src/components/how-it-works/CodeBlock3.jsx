import CodeBlockDiv from "./CodeBlockDiv";
import {
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

export default function CodeBlock3() {
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
        commerce
        <Dot />
        checkout
        <Dot />
        <Purple>retrieve</Purple> <OpenBrac />
        <Apos />
        <Green>token</Green>
        <Apos />, <Apos />
        <Green>cart</Green>
        <Apos />
        <CloseBrac />
        <Dot />
        <Purple>then</Purple>
        <OpenBrac />
        <OpenBrac />
        cart
        <CloseBrac /> <Sky>=&#62;</Sky> console
        <Dot />
        <Purple>log</Purple>
        <OpenBrac />
        cart.id
        <CloseBrac />
        <CloseBrac />
      </White>
    </CodeBlockDiv>
  );
}
