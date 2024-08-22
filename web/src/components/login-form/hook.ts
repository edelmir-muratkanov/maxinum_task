import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginFormSchema, LoginFormSchema } from './schema'
import { usePostLoginMutation } from '@/lib/api/hooks/usePostLoginMutation'
import { ACCESS_TOKEN_STORAGE } from '@/lib/constants'
import { flushSync } from 'react-dom'
import { useProfile } from '@/lib/contexts/auth'
import { useNavigate } from 'react-router-dom'

export const useLoginForm = () => {
  const { setUser } = useProfile()
  const navigate = useNavigate()
  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const postLoginMutation = usePostLoginMutation({})

  const onSubmit = form.handleSubmit(async values => {
    const { data } = await postLoginMutation.mutateAsync({ params: values })

    if (data.accessToken && data.id) {
      flushSync(() => {
        localStorage.setItem(ACCESS_TOKEN_STORAGE, data.accessToken)
        setUser!({ id: data.id, email: data.email })
      })

      navigate('/')
    }
  })

  const goToRegister = () => navigate('register')

  return {
    goToRegister,
    loading: postLoginMutation.isPending,
    form,
    onSubmit,
  }
}
