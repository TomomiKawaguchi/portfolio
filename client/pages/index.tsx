import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Box, Heading, List, ListItem, Icon } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })








export default function Home() {
 

  return (
    <main className={styles.main}>
      <div className={styles.description}>

      <div>
       
       <Link href="/login">
         <button>管理者LOGIN</button>
       </Link>
     
     </div>


     <div className={styles.center}>
      <h1>

        Tomomi Kawaguchi Portfolio
      </h1>

      </div>
        <img src="/mountain.jpg" alt="Mountain" width="700" height="450"/>
          <code className={styles.code}>
          </code>
      </div>
      <div className={styles.grid}>


    

        <h2>
          About me
          </h2>
          <br />
          <p>
          1987年静岡県沼津市出身・三島市在住
          <br/>
          <br/>
          大学進学を機に愛知県へ行き<br/>
          大学と社会人経験2社経験後静岡県へUターン、<br />
          自動車ディーラーの本社で事務、DX推進に従事、リーダー職も経験。
          <br />
          新卒から一貫してコーポレート部門を経験。<br />
          約9年務めた会社を退職し、<br />
          2023年1月からMs.engineerへ入校、Javascript・HTML・CSSを学ぶ。<br/>
          5月から3ヶ月間 高負荷のプログラミングブートキャンプに。<br />
          南インドカレーとコーヒーが何よりも好き。
          </p>
          <br />
          <br />
          

 <Box borderWidth="1px" borderRadius="lg" p="6" boxShadow="lg">
  <Heading as="h2" size="lg" mb="4" borderBottom="1px solid" pb="2">
    Likes
  </Heading>
  <List spacing={2}>
    <ListItem display="flex" alignItems="center">
      <Icon as={FaCheckCircle} color="teal.500" mr="2"/>
      南インドカレー
    </ListItem>
    <ListItem display="flex" alignItems="center">
      <Icon as={FaCheckCircle} color="teal.500" mr="2"/>
      ドライブ
    </ListItem>
    <ListItem display="flex" alignItems="center">
      <Icon as={FaCheckCircle} color="teal.500" mr="2"/>
      お香を焚く
    </ListItem>
    <ListItem display="flex" alignItems="center">
      <Icon as={FaCheckCircle} color="teal.500" mr="2"/>
      登山
    </ListItem>
    <ListItem display="flex" alignItems="center">
      <Icon as={FaCheckCircle} color="teal.500" mr="2"/>
      神社巡り
    </ListItem>
    <ListItem display="flex" alignItems="center">
      <Icon as={FaCheckCircle} color="teal.500" mr="2"/>
      一人旅
    </ListItem>
    </List>

    <Box height="20px"></Box>

    <Box borderWidth="1px" borderRadius="lg" p="6" boxShadow="lg">
  <Heading as="h2" size="lg" mb="4" borderBottom="1px solid" pb="2">
    Skills
  </Heading>
  <List spacing={2}>
    <ListItem display="flex" alignItems="center">
      <Icon as={FaCheckCircle} color="teal.500" mr="2"/>
      Javascript
    </ListItem>
    <ListItem display="flex" alignItems="center">
      <Icon as={FaCheckCircle} color="teal.500" mr="2"/>
      Typescript
    </ListItem>
    <ListItem display="flex" alignItems="center">
      <Icon as={FaCheckCircle} color="teal.500" mr="2"/>
      Python
    </ListItem>
    <ListItem display="flex" alignItems="center">
      <Icon as={FaCheckCircle} color="teal.500" mr="2"/>
      node.js
    </ListItem>
    <ListItem display="flex" alignItems="center">
      <Icon as={FaCheckCircle} color="teal.500" mr="2"/>
      AWS
    </ListItem>
    <ListItem display="flex" alignItems="center">
      <Icon as={FaCheckCircle} color="teal.500" mr="2"/>
      HTML・CSS
    </ListItem>
    {/* Add more skills as needed */}
  </List>
  </Box>
</Box>

      </div>
    </main>
    
  )
  
}
