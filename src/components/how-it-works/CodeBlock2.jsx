import CodeBlockDiv from "./CodeBlockDiv";
import { Purple, Sky, Blue, Green, Orange, White } from "./CodeColors";

export default function CodeBlock2() {
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
        commerce<Sky>.</Sky>products<Sky>.</Sky>
        <Purple>list</Purple>
        <Sky>&#40;&#41;</Sky>
        <Purple>then</Purple> <Sky>&#40;&#40;</Sky>product
        <Sky>&#41; =&#62;</Sky> console
        <Sky>.</Sky>
        <Purple>log</Purple>
        <Sky>&#40;</Sky>product<Sky>&#41;&#41;;</Sky>
      </White>
    </CodeBlockDiv>
  );
}
