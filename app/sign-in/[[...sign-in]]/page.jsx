import { SignIn } from '@clerk/nextjs'

export default function Page() {
    return(
    
         <div className='flex items-center mt-10 justify-center'>
        <SignIn />
        </div>
    )
}