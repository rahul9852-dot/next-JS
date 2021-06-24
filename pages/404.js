import Link from "next/link"
import {useEffect} from 'react'
import {useRouter} from 'next/router'
const NotFound = () => {

    // redirecting user as we want 

    // with the help of router we can back-fourth between the page.
    // using method ---> router.go(-1 or +1);


    const router=useRouter();

    useEffect(()=>{
       // console.log("useEffect run!");
       setTimeout(()=>{
            router.push('/');
       },3000);
    },[]);

    return (
        <div className="not-found">
        <h1>Ooooops...</h1>
        <h2>That page cannot be found.</h2>
        <p>Go back to the<Link href="/"><a>HomePage</a></Link> </p>
        </div>
      );
}
 
export default NotFound;