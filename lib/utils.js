import { Layout } from '@/components/layout';


// resolve this?
export async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
export default Layout;
