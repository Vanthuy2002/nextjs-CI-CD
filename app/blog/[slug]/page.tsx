type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: Params) {
  return (
    <section>
      <h1>Slug: {params.slug}</h1>
      <h2 role='note'>By Thuy Nguyen</h2>
    </section>
  );
}
