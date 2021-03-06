import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const name = 'Rhys';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
	return (
		<div className="mx-auto p-10 max-w-2xl">
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Learn how to build a personal website using Next.js"
				/>
				<meta
					property="og:image"
					content={`https://og-image.vercel.app/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<header className="flex flex-col items-center">
				{home ? (
					<>
						<Image
							priority
							src="/images/profile.jpg"
							className="rounded-full"
							height={144}
							width={144}
							alt={name}
						/>
						<h1 className="my-5 text-4xl font-extrabold">{name}</h1>
					</>
				) : (
					<>
						<Link href="/">
							<a>
								<Image
									priority
									src="/images/profile.jpg"
									className="my-5 rounded-full"
									height={108}
									width={108}
									alt={name}
								/>
							</a>
						</Link>
						<h2 className="leading-normal text-3xl font-bold m-4">
							<Link href="/">
								<a className="my-2  ">{name}</a>
							</Link>
						</h2>
					</>
				)}
			</header>
			<main>{children}</main>
			{!home && (
				<div className="mt-20 text-blue-500 hover:underline ">
					<Link href="/">
						<a>← Back to home</a>
					</Link>
				</div>
			)}
		</div>
	);
}
