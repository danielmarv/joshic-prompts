'use client'

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Form from '@components/Form';

const CreatePrompt = () => {
    const [submitting, setSubmitting] = useState();
    const [post, setPost] = useState({
        promt: '',
        tag: '',
    });

    const createPrompt = async (e) => {
        
    }
    return (
        <Form />
    )
}

export default CreatePrompt;