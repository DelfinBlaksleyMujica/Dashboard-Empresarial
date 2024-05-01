import { Inter } from 'next/font/google';

import { Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({ weight: "700",subsets:['latin'] });
/*Lo de arriba lo hice yo, lo que en realidad habría que haber escrito es lo siguiente.
export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
});*/ 