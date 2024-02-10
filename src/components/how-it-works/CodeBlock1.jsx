import CodeBlockDiv from "./CodeBlockDiv";
import { Comment, Sky, Blue, Green, Orange, White } from "./CodeColors";

export default function CodeBlock1() {
  return (
    <CodeBlockDiv>
      <White>
        <Comment>&#47;&#47; Import the Commerce module</Comment>
        <br />
        <Blue>import</Blue> Commerce <Blue>from</Blue>{" "}
        <Green>&apos;@chec/commerce.js&apos;</Green>
        <Sky>;</Sky>
        <br />
        <br />
        <Comment>&#47;&#47; Create a Commerce instance</Comment>
        <br />
        <Blue>const</Blue> commerce <Sky>=</Sky> <Blue>new</Blue>{" "}
        <Orange>Commerce</Orange>
        <Sky>&#40;</Sky> <Green>&apos;&#123;your_public_key&#125;&apos;</Green>
        <Sky>&#41;;</Sky>
      </White>
    </CodeBlockDiv>
  );
}
