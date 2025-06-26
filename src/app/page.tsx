import { Submenu } from "./components/home/submenu";
import { getDataHome } from '@/utils/actions/get-data'


export default async function Home() {

  const data = await getDataHome()
  console.log(JSON.stringify(data,null,2))

  return (
    <main>
      <Submenu/>
    </main>
  );
}
