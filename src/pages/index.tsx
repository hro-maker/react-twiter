import Navbar from "../components/NavBar";
import { createUrqlClient } from "../utils/createUrqlClient";
import { withUrqlClient } from 'next-urql';

const Index = () => {
    
    return (
<>
<Navbar/>
<div className="hello">hello world</div>
</>

)
}
export default withUrqlClient(createUrqlClient,{ssr:true})(Index)
