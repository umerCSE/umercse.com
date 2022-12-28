import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function SinglePage({children}){

	return (
		<>
		<Header />
        <main id="main">
        {children}
        </main>
        <Footer />
		</>
	);
}
