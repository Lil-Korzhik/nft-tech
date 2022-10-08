import type { AppProps } from 'next/app';
import Layout from '../components/Global/Layout';
import '../styles/styles.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;