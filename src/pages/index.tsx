import Navbar from "../components/NavBar";
import { createUrqlClient } from "../utils/createUrqlClient";
import { withUrqlClient } from 'next-urql';
import { usePostsQuery } from "../generated/graphql";

const Index = () => {
    const [{data}]=usePostsQuery()
    
    return (
<>
<Navbar/>
        {!data ?null: data.posts.map((el,i)=>
            <div key={i}>
                {el.title}
            </div>
            )}
<div className="hello">hello world</div>
</>

)
}
export default withUrqlClient(createUrqlClient,{ssr:true})(Index)
