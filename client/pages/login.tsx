

import { useRouter } from "next/router"
import Link from "next/link"
// // import { useAuthContext } from "./AuthContext"
// import { app } from "lib/firebase"
import { ChakraProvider } from '@chakra-ui/react'
import {
  Box,
  Button,
  Center,
  chakra,
  Container,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
  Flex,
  Spacer,
  useToast,
} from '@chakra-ui/react'
import { FormEvent, useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { FirebaseError } from '@firebase/util'


// import React, { useState } from 'react';
// import { auth } from 'lib/firebase'; // あなたのFirebase設定が格納されているファイルのパスを適切に設定してください。

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
//   const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);






export const Page = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const toast = useToast()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setIsLoading(true)
    e.preventDefault()
    try {
      const auth = getAuth()
      await signInWithEmailAndPassword(auth, email, password)
      setEmail('')
      setPassword('')
      toast({
        title: 'ログインしました。',
        status: 'success',
        position: 'top',
      })
      //TODO: ログイン後のページに遷移の処理を書く
    } catch (e) {
      toast({
        title: 'エラーが発生しました。',
        status: 'error',
        position: 'top',
      })
      if (e instanceof FirebaseError) {
        console.log(e)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Flex minHeight="100vh" width="full" align="center" justifyContent="center">
      <Box borderWidth={1} px={4} width="full" maxWidth="500px" borderRadius={4} textAlign="center" boxShadow="lg">
        <Box p={4}>
          <Box textAlign="center">
            <Heading>サインイン</Heading>
          </Box>
          <Box my={8} textAlign="left">
            <chakra.form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel>メールアドレス</FormLabel>
                <Input
                  type={'email'}
                  name={'email'}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </FormControl>
              <FormControl>
                <FormLabel>パスワード</FormLabel>
                <Input
                  type={'password'}
                  name={'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </FormControl>
              <Center mt={6}>
                <Button type={'submit'} isLoading={isLoading}>
                  ログイン
                </Button>
              </Center>
            </chakra.form>
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}
export default Page