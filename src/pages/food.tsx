import type { NextPage } from 'next'
import Head from 'next/head';

import Message from '../components/Food/Message';
import Filters from '../components/Food/Filters';
import List from '../components/Food/List';

const Home: NextPage = () => {
  return (
    <section className="section-food" id="section-food">
      <Head>
        <title>NFT-Tech | Еда</title>
      </Head>

      <div className="container">
            <Message text="Получай донат едой, дари еду друзьям и коллегам, разыгрывай еду!" />
            <Filters />
            <List />
      </div>
    </section>
  )
}

export default Home;