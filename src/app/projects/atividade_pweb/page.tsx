import Head from 'next/head';

const Quotes = () => {
  return (
    <div>
      <Head>
        <title>Quotes Project</title>
        <link rel="stylesheet" href="/quotes/style.css" />
      </Head>
      <iframe
        src="/atividade_pweb/pages/index.html"
        style={{ width: '100%', height: '100vh', border: 'none' }}
        title="Quotes Project"
      />
    </div>
  );
};

export default Quotes;
