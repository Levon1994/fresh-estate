import { Head } from "$fresh/runtime.ts";
import { Card } from "../components/Card.tsx";
import Navigation  from "../islands/Navigation.tsx";
import { IProduct } from '../utils/types.ts'
import { Handlers, PageProps } from '$fresh/server.ts'

export const handler: Handlers<IProduct[] | null> = {
  async GET(_, ctx) {
    const res = await fetch('https://fakestoreapi.com/products')
    const products = (await res.json()) as IProduct[]
    if (!products) {
      return ctx.render(null)
    }
    return ctx.render(products)
  },
}

export default function Home({ data: products }: PageProps<IProduct[] | null>) {
  return (
    <>
      <Head>
        <title>Fresh</title>
        <meta property="og:image"  content="https://fresh.deno.dev/home-og.png?__frsh_c=bfr9x0wn00w0"/>
      </Head>
      <Navigation />

    <div class="bg-white">
      <div class="mx-auto max-w-4xl py-16 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Clothing an Fashion</h2>
        <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products?.map((item) => (
          <Card key={item.id} {...item} />
        ))}
        </div>
      </div>
    </div>
   </>
  );
}
