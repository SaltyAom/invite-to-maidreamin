import { useEffect } from 'preact/hooks'

import { useRouter } from 'next/router'

import LoadingIndicator from 'components/loadingIndicator'

const CreateRedirect = () => {
    let router = useRouter()

    useEffect(() => {
        router.push("/create/detail")
    }, [])

    return <LoadingIndicator />
}

export default CreateRedirect