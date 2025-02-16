// import { client } from "@/sanity/client";

import { PortableText } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";
import Link from "next/link";
import Image from "next/image";
import ArticleReader from "@/components/ArticleReader";


const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const sanityOptions = { next: { revalidate: 30 } };

const dateOptions = { 
  year: "numeric",
  month: "long",
  day: "numeric",
};

const defaults = {nonTextBehavior: 'remove'}
const blocksToText = (blocks, opts = {}) => {
  const options = Object.assign({}, defaults, opts)
  return blocks
    .map(block => {
      if (block._type !== 'block' || !block.children) {
        return options.nonTextBehavior === 'remove' ? '' : `[${block._type} block]`
      }

      return block.children.map(child => child.text).join('')
    })
    .join('\n\n')
}

export default async function Post({params}) {
    const post = await client.fetch(POST_QUERY, await params, sanityOptions);
    const postImageUrl = post.image
      ? urlFor(post.image)?.url()
      : null;

      console.log(postImageUrl);
      
  
    return (
      <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
        <Link href="/blog" className="hover:underline pb-5">
          ← Back to posts
        </Link>
        
        <div className="prose mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">{post.title}</h1>
          <div className="flex justify-center gap-5">
            <div className="text-center">{new Intl.DateTimeFormat("en-US", dateOptions).format(new Date(post.publishedAt))}</div>
            <ArticleReader text={blocksToText(post.body)} />
          </div>
          {postImageUrl && (
            <Image
              src={postImageUrl}
              alt={post.title}
              className="aspect-video rounded-xl mx-auto"
              width="900"
              height="420"
            />
          )}
          <div className="mx-5">
            {Array.isArray(post.body) && <PortableText value={post.body} />}
          </div>
        </div>

      </main>
    );
  }
  
  