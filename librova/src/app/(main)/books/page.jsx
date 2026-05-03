import { redirect } from 'next/navigation'

const page = async () => {
    redirect('/books/all')
}

export default page