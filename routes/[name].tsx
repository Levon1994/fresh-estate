import { Fragment, h } from "preact";
import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function Greet(props: PageProps) {
  return <>
        <Head>
        <title>{props.params.name}</title>
      </Head>
   <div>
    Hello {props.params.name}
   </div>
    </>;
}
