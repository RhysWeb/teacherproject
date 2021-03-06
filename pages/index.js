import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	const teachers = await fetch(
		'https://teacherproject-pzir1m9qi-rhysweb.vercel.app/api/teachers'
	).then((res) => res.json());
	return {
		props: {
			allPostsData,
			teachers,
		},
	};
}

export default function Home({ allPostsData, teachers }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className="text-xl pt-3">
				<p>NextJS Website to learn how to use it. Changes made on 23/01/22.</p>
				<pre>{JSON.stringify(teachers)}</pre>
			</section>
			<section>
				<h2 className="text-2xl py-5">Blog</h2>
				<ul className="">
					{allPostsData.map(({ id, date, title }) => (
						<li className="pb-5" key={id}>
							<Link href={`/posts/${id}`}>
								<a className="text-blue-500 hover:underline">{title}</a>
							</Link>
							<br />
							<small>
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}

{
	/* <Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>
					This is a whole new paragraph to think about. I've changed the github
					remote name and possibly fucked this (Temporarily)
				</p>
			</section>
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/posts/${id}`}>
								<a>{title}</a>
							</Link>
							<br />
							<small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout> */
}
